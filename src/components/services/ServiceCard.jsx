import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../constant";
import { cardVariants } from "../../utils/motion";

function ServiceCard() {
  return (
    <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{ amount: 0.5 }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {servicesData.map(({ id, image, title, subtitle }) => (
        <motion.div variants={cardVariants} key={id} className=" text-center p-4 space-y-6">
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
      ))}
    </motion.div>
  );
}

export default ServiceCard;
