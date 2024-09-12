import React, { useState } from "react";
import { Navbar, Sidebar } from "../index";
import { BgImage, BlackCoffee } from "../../assets";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section  */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section  */}
            <article className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur, cumque eos neque dolorem architecto
                    deserunt quis voluptatibus in quisquam quia ducimus
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </article>
            {/* Hero img section  */}
            <article className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt="Black coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange cercle ring  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute h-[180px] w-[180px] top-24 -right-16 border-primary rounded-full z-10 border-[20px]"
              ></motion.div>
              {/* black text section */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[250px] z-[1]"
              >
                <h3 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-non">
                  Black Tumbler
                </h3>
              </motion.div>
            </article>
            {/* third div section  */}
            <motion.article
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
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
            </motion.article>
            <div></div>
          </div>
        </div>
        {/* sidevar menu section  */}
        {sidebar && (
          <Sidebar/>
        )}
      </section>
    </main>
  );
};

export default Hero;
