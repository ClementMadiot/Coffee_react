import React, { useState } from "react";
import { motion } from "framer-motion";
// import data
import { HeroText, Navbar, Sidebar } from "../index";
import { BlackCoffee, bgImageStyle } from "../../assets/index";
import { fadeIn, fadeScale } from "../../utils/motion";

const Hero = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <section style={bgImageStyle}>
      <section className="relative w-full">
        <div className="container">
          {/* Navbar section  */}
          <Navbar toggle={toggle} settoggle={settoggle} />
          {/* Hero section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center  ">
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
                animate="show"
                src={BlackCoffee}
                alt="Black coffee"
                className="hidden vsm:block relative z-40 h-[300px] mb-2 img-shadow lg:h-[400px]"
              />
              {/* orange cercle ring  */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate={"show"}
                className="hidden vsm:block absolute h-[100px] w-[100px] top-4 -right-10 border-primary rounded-full z-10 border-[14px] lg:h-[120px] lg:w-[120px] lg:-right-10"
              ></motion.div>

              {/* black text section */}
              <div className="absolute hidden md:block -top-16 -left-10 z-[1] lg:left-44">
                <h3 className="text-9xl scale-150 font-bold text-darkGray/40 leading-non">
                  Black Tumbler
                </h3>
              </div>
            </article>
            {/* text content section  */}
            <HeroText
              hidden={"hidden lg:block"}
              className="text-transparent md:-mt-6"
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
        {toggle && <Sidebar />}
      </section>
    </section>
  );
};

export default Hero;
