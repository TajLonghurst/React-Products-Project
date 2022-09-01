import React from "react";
import { imgslideLeft } from "../../Animations/Products-Animations";
import { motion } from "framer-motion";
//import ImgIcon from "../../Assets/Icons/bx-images.svg";
import useWindowSize from "../../Hooks/use-windowSize";
import classes from "../IndividualDetails/ProductImageDisplay.module.css";

const ProductImageDisplay = (props) => {
  const { isMobileView } = useWindowSize();
  // const [selectedImg, setSelectedImg] = useState(null);
  // const img = props.extraImages;

  // const currentlySelectedImg = (selectedImg) => {
  //   setSelectedImg(selectedImg);
  // };

  // const mapImg =
  //   img &&
  //   img.map((extraImg, index) => {
  //     return (
  //       <li key={index} className={classes.item}>
  //         <img
  //           onClick={() => currentlySelectedImg(extraImg)}
  //           className={classes.smallimg}
  //           src={extraImg}
  //           alt="Img failed"
  //         />
  //       </li>
  //     );
  //   });

  // const isErrorMsg = (
  //   <div className={classes.errorcontainer}>
  //     <p className={classes.errorText}>No Extra Images</p>
  //     <img className={classes.errorimg} src={ImgIcon} alt="Icon Failed" />
  //   </div>
  // );

  //const extraImages = !img ? isErrorMsg : mapImg;
  //const diplayMainImg = selectedImg === null ? props.img : selectedImg;

  return (
    <motion.div
      variants={imgslideLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.ImageContainer}
    >
      <div className={classes.imgbody}>
        <img className={classes.img} src={props.img} alt="Img Failed" />
      </div>
      <div className={classes.selectimgsbody}>
        {isMobileView && (
          <p className={classes.scrollMobiletext}>Scroll Down</p>
        )}
        {/* <ul className={classes.list}>{extraImages}</ul> */}
      </div>
    </motion.div>
  );
};

export default ProductImageDisplay;
