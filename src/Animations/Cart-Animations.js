export const cartPopEffect = {
  hidden: {
    y: "-10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: "17",
      stiffness: 500,
    },
  },
  exit: {
    y: "-50%",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
