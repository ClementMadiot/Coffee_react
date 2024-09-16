export const cardVariants = (delay) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        stiffness: 100,
        damping: 11,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeScale = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        stiffness: 100,
        damping: 11,
        bounce: 0.25,
      },
    },
  };
};
