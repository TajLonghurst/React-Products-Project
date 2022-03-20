export const slideDown = {
  hidden: {
    y: "-10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      damping: "40",
      stiffness: 300,
    },
  },
  exit: {
    y: "-10%",
    opacity: 0,
    transition: {
      delay: 1,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};
