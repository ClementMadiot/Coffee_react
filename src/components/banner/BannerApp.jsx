import React from "react";
import { motion } from "framer-motion";
// data
import { fadeIn } from "../../utils/motion";
import { BannerStyle } from "../../assets";
import { BannerLink } from "../../constant";

function BannerApp() {
  return (
    <section className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center     rounded-xl"
      >
        <article className="">
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className=" text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates.
            </motion.p>
            {/* images link  */}
            <div className="flex justify-center items-center gap-4">
              {BannerLink.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  animate="show"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                >
                  <img src={item.img} alt={item.img} />
                </motion.a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BannerApp;
