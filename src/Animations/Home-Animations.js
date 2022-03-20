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
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export const upWardsMotionH1 = {
  hidden: {
    y: "-35%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      damping: "40",
      stiffness: 300,
    },
  },
  exit: {
    y: "-35%",
    opacity: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};

export const downWardsMotionH1 = {
  hidden: {
    y: "35%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.6,
      type: "spring",
      damping: "40",
      stiffness: 300,
    },
  },
  exit: {
    y: "35%",
    opacity: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};

export const navLinkdisapear = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  exit: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
