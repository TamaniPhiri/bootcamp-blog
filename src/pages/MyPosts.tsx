import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPostState, userDetailsState } from "../atoms/atoms";

export interface Posts {
  id: number;
  title: string;
  description: string;
  image: string;
  userId: number;
}

const MyPosts = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [selectedPost, setSelectedPost] = useRecoilState(selectedPostState);
  const user = useRecoilValue(userDetailsState);
  const { isLoading } = useQuery(
    "getPosts",
    async () => {
      const res = await axios.get(
        "https://bootcamp-blog-server.vercel.app/post/fetch"
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
        setPosts(data);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const { isLoading: deletePostLoading, mutate } = useMutation(
    "deletePost",
    async () => {
      const res = await axios.delete(
        `https://bootcamp-blog-server.vercel.app/post/delete/${selectedPost?.id}`
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const handleDelete = (item: Posts) => {
    setSelectedPost(item);
    mutate();
  };
  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 md:px-12 px-6 gap-12 py-8">
      {isLoading && "Loading..."}
      {posts
        .filter((post) => post.userId === user?.id)
        .map((item, i) => (
          <div key={i} className="">
            <div className="relative">
              <img
                src={item.image}
                alt="img"
                className="w-full h-52 object-cover object-center"
              />
              <button
                onClick={() => handleDelete(item)}
                className="absolute top-0 right-0 bg-red-500 p-2 rounded-md text-white"
              >
                {deletePostLoading ? (
                  "Loading..."
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                )}
              </button>
            </div>
            <h1 className="font-bold text-4xl py-2">{item.title}</h1>
            <p className=" text-gray-600">{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default MyPosts;
