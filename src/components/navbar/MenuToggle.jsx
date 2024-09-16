import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function MenuToggle({ toggle, settoggle }) {
  return (
    <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GiHamburgerMenu
              className={`text-3xl cursor-pointer ${
                toggle ? "hidden" : "flex"
              }`}
              onClick={() => settoggle(!toggle)}
            />
            {toggle && (
              <IoClose
                className="text-3xl cursor-pointer"
                onClick={() => settoggle(!toggle)}
              />
            )}
          </motion.div>
  )
}

export default MenuToggle