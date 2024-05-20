import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className=" bg-cover bg-center h-[300px] bg-black md:bg-transparent md:h-[940px] !w-full  items-center justify-center"
      //   style={{ backgroundImage: `url(${rickMortyImage})` }}
    >
      <div className="bg-[black] absolute -z-10 top-[3rem] left-0 right-0 md:min-w-[100vh]">
        {" "}
        <img
          src="/assets/rick-morty.jpg"
          className="object-cover hidden md:block !w-full "
          alt="banner"
          width={1000}
          height={400}
        />
      </div>
      <div className=" !z-10  rounded">
        <h1 className="text-white pt-10 text-4xl md:text-6xl font-bold text-center">
          Rick and Morty Adventures
        </h1>
        <p className="text-white text-md md:text-lg text-center mt-4">
          Join Rick and Morty as they traverse the cosmos!
        </p>
      </div>
      <Link to="search">
        <button className="md:absolute mt-[3rem] bottom-2 right-44 w-1/3 mx-auto">
          Let's Explore
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
