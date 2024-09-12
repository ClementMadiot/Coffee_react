import React, { useState } from "react";
import { HeroText, Navbar, Sidebar } from "../index";
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
            <HeroText
            title={"Black Tumbler"}
            subheading={"Black Lifestyle Lovers"}
            paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus"}
            color={"-left-10 bg-gray-700/25"}
            />
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
            {/* text content section  */}
            <HeroText
            className="text-7xl font-bold leading-tight text-transparent"
            title={"Black Tumbler"}
            subheading={"Black Tumbler"}
            paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus aspernatur,"}
            color={"-right-10 bg-darkGray/50"}
            />
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
