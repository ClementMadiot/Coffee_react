export const cardVariants = {
  hidden: {
    opacity: 1,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 11,
      ease:"easeInOut",
      duration: 0.3,
    },
  },
};