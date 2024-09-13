export const cardVariants = {
  hidden: {
    y: 20,
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 11,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const fadeScale = (duration) => {
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
        duration: duration,
      },
    },
  };
}

export const fadeIn = (direction, duration) => {
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
        duration: duration,
        stiffness: 100,
        damping: 11,
      },
    },
  };
};
