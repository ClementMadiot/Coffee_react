import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
      <article className="container">
        <div className="flex justify-between items-center">
          {/* logo section  */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl font-semibold text-primary uppercase"
          >
            Coders <span className="text-white">Coffee.</span>
          </motion.h1>
          {/* Hamburger  */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setSidebar(!sidebar)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
