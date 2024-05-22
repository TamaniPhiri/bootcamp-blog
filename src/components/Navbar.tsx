import { useRecoilValue } from "recoil";
import { userDetailsState } from "../atoms/atoms";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useRecoilValue(userDetailsState);
  return (
    <div className=" w-full flex items-center justify-between px-4 md:px-12 py-4">
      <h1>Blog</h1>{" "}
      <div className="flex items-center gap-2">
        <Link to={"/new-post"}>New Post</Link>
        <Link to={"/my-posts"}>My Posts</Link>
        <span>{user?.username}</span>
      </div>
    </div>
  );
};

export default Navbar;
