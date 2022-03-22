export const filterSlideRight = {
  hidden: {
    x: "-15vw",
  },
  visible: {
    x: "0vw",
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 600,
    },
  },
  exit: {
    x: "-15vw",
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};

export const mobileFilter = {
  hidden: {
    y: "10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: "40",
      stiffness: 300,
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const productsList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.1,
    },
  },
};
export const productsItemHover = {
  whileHover: {
    scale: 1.1,
    duration: 0.2,
  },
};

export const imgBgslideRight = {
  hidden: {
    x: "-50vw",
  },
  visible: {
    x: "0vw",
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
  exit: {
    x: "-50vw",
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};

export const imgslideLeft = {
  hidden: {
    x: "10vw",
    opacity: 0,
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: {
      delay: 1.3,
      type: "spring",
      damping: "25",
      stiffness: 500,
    },
  },
  exit: {
    x: "10vw",
    opacity: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      damping: "40",
      stiffness: 500,
    },
  },
};

export const fadeUp = {
  hidden: {
    y: "2vh",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 1.2,
      type: "spring",
      damping: "50",
      stiffness: 800,
    },
  },
  exit: {
    y: "2vh",
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
};
