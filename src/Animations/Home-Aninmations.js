//Homepage NavLinks hover Effect

export const popEffect = {
  hidden: {
    width: "45vh",
    opacity: 1,
  },
  visible: {
    width: "50vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: "17",
      stiffness: 500,
    },
  },
  exit: {
    width: "35vh",
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};
