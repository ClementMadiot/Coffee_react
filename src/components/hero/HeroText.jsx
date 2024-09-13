import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function HeroText({ className, title, subheading, paragraph, color }) {
  return (
    <article className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
      <motion.h1
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        className={` ${className || "text-7xl font-bold leading-tight ml-14"} `}
      >
        {title}
      </motion.h1>
      <motion.div
      variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        className="relative"
      >
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl">{subheading}</h2>
          <p className="text-sm opacity-55 leading-loose">{paragraph}</p>
        </div>
        <div className={`absolute -top-6 w-[250px] h-[190px] ${color}`}></div>
      </motion.div>
    </article>
  );
}

export default HeroText;
