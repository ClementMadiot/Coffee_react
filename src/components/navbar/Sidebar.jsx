import React from "react";
import { motion } from "framer-motion";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { navSocials } from "../../constant/index";

function Sidebar() {
  return (
    <motion.article
      initial={{ x:"100%"}}
      whileInView={{x:0}}
      className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-6 text-white">
          {/* line  */}
          <div className="w-[1px] h-[70px] bg-white"></div>
          {/* social icons  */}
            {navSocials.map((item, index) => (
          <div key={index} className="inline-block p-2 rounded-full cursor-pointer border border-white">
              {item.icon}
          </div>
            ))}
          {/* line  */}
          <div className="w-[1px] h-[70px] bg-white"></div>
        </div>
      </div>
    </motion.article>
  );
}

export default Sidebar;
