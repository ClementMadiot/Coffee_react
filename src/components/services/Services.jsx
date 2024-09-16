import React from "react";
import { motion } from "framer-motion";
// import motion
import { fadeIn } from "../../utils/motion";
// import { cardVariants } from "../../utils/motion";
// import components
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../constant";

const Services = () => {
  return (
    <section className="container my-16 space-y-4">
      {/* header section  */}
      <article className=" text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          // viewport={{ once: true }}
          className=" text-3xl font-bold text-lightGray mb-4"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-sm opacity-80"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </motion.p>
      </article>
      {/* card section  */}
      <article
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((item, index) => (
          <ServiceCard key={item.id} index={index} {...item} />
        ))}
      </article>
    </section>
  );
};

export default Services;
