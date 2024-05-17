import { DummyData } from "../constants/constants";

const Hero = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 md:px-12 px-6 gap-12 md:py-16 py-8">
      {DummyData.map((item, i) => (
        <div key={i} className="">
          <img
            src={item.image}
            alt="img"
            className="w-full h-52 object-cover object-center"
          />
          <h1 className="font-bold text-4xl py-2">{item.title}</h1>
          <div>
            <span className="font-bold">{item.author} - </span>
            <span className=" text-gray-500">{item.createdAt}</span>
          </div>
          <p className=" text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
