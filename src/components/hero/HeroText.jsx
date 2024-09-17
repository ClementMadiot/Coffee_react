import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function HeroText({ className,hidden, title, subheading, paragraph, color }) {
  return (
    <article className={`${hidden} text-lightOrange mt-16 md:mt-20 mb-6 md:mb-12 p-4 space-y-6 sm:space-y-20`} >
      <motion.h1
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        animate={"show"}
        className={` ${className} text-4xl md:text-6xl text-center font-bold leading-tight sm:max-w-[320px] sm:text-left sm:leading-snug `}
      >
        {title}
      </motion.h1>
      <motion.div
      variants={fadeIn("up", 0.9)}
        initial="hidden"
        animate={"show"}
        className="relative md:pl-6"
      >
        <div className="relative z-10 space-y-2 md:space-y-4 p-4 bg-gray-700/25 sm:p-0 sm:bg-inherit">
          <h2 className="text-1xl sm:text-2xl">{subheading}</h2>
          <p className="text-xs vsm:text-sm opacity-55 font-semibold md:leading-loose">{paragraph}</p>
        </div>
        <div className={`hidden sm:block absolute -top-4 -left-24 w-[240px] h-[180px] md:left-px md:h-[200px] md:w-[200px] ${color}`}></div>
      </motion.div>
    </article>
  );
}

export default HeroText;
