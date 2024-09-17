import React from "react";
import { motion } from "framer-motion";
// import motion
import { cardVariants } from "../../utils/motion";
import Button from "./Button";

function ServiceCard({ id, image, title, subtitle, index }) {
  return (
    <motion.div
    key={id}
    variants={cardVariants(0.3 * index )}
      initial="hidden"
      animate={"show"}
    className=" bg-white border max-w-[240px] m-auto hover:scale-105 duration-150 shadow-lg rounded-lg ">
        <img
          className="rounded-t-lg object-cover overflow-hidden h-44 w-full "
          src={image}
          alt={image}
        />
      <div className="p-5 dark:bg-gray-100 ">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary">
          {title}
        </h3>

        <p className="mb-3 font-normal leading-tight text-darkGray">{subtitle}</p>
        <Button text={"Read more"} />
      </div>
    </motion.div>
  );
}

export default ServiceCard;
