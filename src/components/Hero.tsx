const Hero = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen w-full items-center px-12">
      <div className="flex flex-col gap-4">
        <p className=" font-bold">😎 SIMPLE COMMUNICATION TOOL</p>
        <h1 className=" text-7xl font-bold">Engage Your Audience in Minutes</h1>
        <p className=" text-gray-500">
          Power communication tool for companies of all sizes
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold">
            Start free trial
          </button>
          <button className="text-blue-400 underline font-semibold">
            Get a live demo
          </button>
        </div>
        <div className="flex gap-4">
          <p>✅ No credit card required</p>
          <p>✅ No software to install</p>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Hero;
