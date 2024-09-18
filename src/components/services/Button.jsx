import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function Button({text, className, delay}) {
  return (
    <motion.button
    variants={fadeIn("up", delay)}
    initial="hidden"
    animate={"show"}
      href="#"
      className={`inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white focus:ring-1 focus:ring-darkGray focus:outline-none bg-gradient-to-r from-primaryDark to-amber-500 hover:from-primaryDark hover:to-amber-600 duration-300 rounded-md  ${className} `}
    >
      {text}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </motion.button>
  );
}

export default Button;
