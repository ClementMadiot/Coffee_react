import React from "react";
import { Navbar } from "../index";
import { BgImage, BlackCoffee } from "../../assets";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section  */}
          <Navbar />
          {/* Hero section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section  */}
            <article className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur, cumque eos neque dolorem architecto
                    deserunt quis voluptatibus in quisquam quia ducimus
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </article>
            {/* Hero img section  */}
            <article className="relative">
              <img
                src={BlackCoffee}
                alt="Black coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange cercle ring  */}
              <div className="absolute h-[180px] w-[180px] top-24 -right-16 border-primary rounded-full z-10 border-[20px]"></div>
              {/* black text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h3 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-non">
                  Black Tumbler
                </h3>
              </div>
            </article>
            {/* third div section  */}
            <article className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <span className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </span>
              <div className="ml-14 "></div>
              <div className="relative ">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Tumbler</h2>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur,Delectus aspernatur, Delectus
                    aspernatur,Delectus aspernatur,
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </article>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
