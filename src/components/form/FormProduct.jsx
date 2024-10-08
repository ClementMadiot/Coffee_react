import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { WorldMap } from "../../assets";
import { inputDatas } from "../../constant";

import Button from "../services/Button";

function FormProduct() {
  return (
    <section className="container my-36">
      <article className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="space-y-8">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate={"show"}

            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate={"show"}
            className="flex items-center gap-4"
          >
            {inputDatas.slice(0, 2).map(({ id, type, placeholder, width }) => (
              <input
                key={id}
                type={type}
                placeholder={placeholder}
                className={`input-style w-full ${width}`}
              />
            ))}
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            animate={"show"}
            className="flex items-center gap-4"
          >
            {inputDatas.slice(2, 4).map(({ id, type, placeholder, width }) => (
              <input
                key={id}
                type={type}
                placeholder={placeholder}
                className={`input-style w-full ${width}`}
              />
            ))}
          </motion.div>
          <Button text="Order Now" delay={1.2} className={"bg-primary text-white px-4 py-3 rounded-md hover:bg-primaryDark duration-200 w-full text-base"} />
        </div>
        {/* world map  */}
        <div className="col-span-2">
          <img
            src={WorldMap}
            alt="WorldMap"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </article>
    </section>
  );
}

export default FormProduct;
