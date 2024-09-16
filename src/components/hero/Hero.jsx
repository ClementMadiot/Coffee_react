import React, { useState } from "react";
import { motion } from "framer-motion";
// import data
import { HeroText, Navbar, Sidebar } from "../index";
import { BlackCoffee, bgImageStyle } from "../../assets/index";
import { fadeIn, fadeScale } from "../../utils/motion";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImageStyle}>
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
              paragraph={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus"
              }
              color={"-left-10 bg-gray-700/25"}
            />
            {/* Hero img section  */}
            <article className="relative">
              <motion.img
                variants={fadeScale(0.4)}
                initial="hidden"
                whileInView="show"
                src={BlackCoffee}
                alt="Black coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange cercle ring  */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                className="absolute h-[180px] w-[180px] top-24 -right-16 border-primary rounded-full z-10 border-[20px]"
              ></motion.div>
              {/* black text section */}
              <div
                className="absolute -top-20 left-[250px] z-[1]"
              >
                <h3 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-non">
                  Black Tumbler
                </h3>
              </div>
            </article>
            {/* text content section  */}
            <HeroText
              className="text-7xl font-bold leading-tight text-transparent"
              title={"Black Tumbler"}
              subheading={"Black Tumbler"}
              paragraph={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus aspernatur,"
              }
              color={"-right-10 bg-darkGray/50"}
            />
          </div>
        </div>
        {/* sidevar menu section  */}
        {sidebar && <Sidebar />}
      </section>
    </main>
  );
};

export default Hero;
