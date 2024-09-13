import React from "react";
import { motion } from "framer-motion";
// import data 
import ServiceCard from "./ServiceCard";



const Services = () => {
  return (
    <section className="container my-16 space-y-4">
      {/* header section  */}
      <div className=" text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 11,
            delay: 0.5,
          }}
          className=" text-3xl font-bold text-lightGray mb-4"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 11,
            delay: 0.6,
          }}
          className="text-sm opacity-80"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </motion.p>
      </div>
      {/* card section  */}
      <ServiceCard/>
    </section>
  );
};

export default Services;
