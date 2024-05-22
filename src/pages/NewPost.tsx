const NewPost = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 border shadow-lg p-4 rounded-lg">
        <h1>Create new Post</h1>
        <input
          type="text"
          placeholder="Title"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
        />
        <textarea
          placeholder="Description"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
        ></textarea>
        <input
          type="text"
          placeholder="Image"
          className="border border-slate-900 rounded-md p-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default NewPost;
