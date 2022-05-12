export const notificationPop = {
  hidden: {
    y: "-10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 1,
      type: "spring",
      damping: "17",
      stiffness: 500,
    },
  },
  exit: {
    y: "20%",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
