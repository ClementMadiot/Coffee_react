import { motion } from "framer-motion";
import { titleVariants } from "../../utils/motion";
import { WorldMap } from "../../assets";
import { inputDatas } from "../../constant";

function FormProduct() {
  return (
    <section className="container my-36">
      <article className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="space-y-8">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView={"visible"}
            transition={{ delay: 0.3 }}
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
            variants={titleVariants}
            initial="hidden"
            whileInView={"visible"}
            transition={{ delay: 0.6 }}
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
          <motion.button
            variants={titleVariants}
            initial="hidden"
            whileInView={"visible"}
            transition={{ delay: 0.6 }}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primaryDark duration-200 w-full"
          >
            Order Now
          </motion.button>
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
