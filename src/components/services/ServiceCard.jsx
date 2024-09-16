import React from "react";
import { motion } from "framer-motion";
// import motion
import { cardVariants } from "../../utils/motion";

function ServiceCard({ id, image, title, subtitle, index }) {
  return (
    <motion.div
      key={id}
      variants={cardVariants(0.4 * index )}
      initial="hidden"
      whileInView={"show"}
      className=" text-center p-4 space-y-6"
    >
      <img
        className="img-shadow2 max-w-[200px] mx-auto hover:scale-105 duration-300 cursor-pointer"
        src={image}
        alt={title}
      />
      <div className="space-y-2">
        <h2 className=" text-2xl font-bold text-primary">{title}</h2>
        <p className=" text-darkGray">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
