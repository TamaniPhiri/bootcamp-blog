import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

interface Posts {
  id: number;
  title: string;
  description: string;
  image: string;
  userId: number;
}

const Hero = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
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

  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 md:px-12 px-6 gap-12 py-8">
      {isLoading && "Loading..."}
      {posts.map((item, i) => (
        <div key={i} className="">
          <img
            src={item.image}
            alt="img"
            className="w-full h-52 object-cover object-center"
          />
          <h1 className="font-bold text-4xl py-2">{item.title}</h1>
          <p className=" text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
