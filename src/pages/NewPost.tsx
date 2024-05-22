import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { userDetailsState } from "../atoms/atoms";
import toast from "react-hot-toast";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const user = useRecoilValue(userDetailsState);
  const { isLoading, mutate } = useMutation(
    "postNewPost",
    async () => {
      const res = await axios.post(
        "https://bootcamp-blog-server.vercel.app/post/create",
        {
          title: title,
          description: description,
          image: image,
          userId: user?.id,
        }
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
        toast.success("Post created successfully");
      },
      onError(error) {
        console.log(error);
        toast.error("Something went wrong");
      },
    }
  );
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 border shadow-lg p-4 rounded-lg">
        <h1>Create new Post</h1>
        <input
          type="text"
          placeholder="Title"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Image"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <button
          disabled={isLoading}
          onClick={() => mutate()}
          className="bg-slate-700 text-white p-2 rounded-md"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default NewPost;
