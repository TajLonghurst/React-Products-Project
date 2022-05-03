import React from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";
import Button from "../UI/Button";
import plusIcon from "../../Assets/Icons/bx-plus.svg";
import minusIcon from "../../Assets/Icons/bx-minus.svg";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Products-Animations";
import { useSelector } from "react-redux";
//import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const individualData = useSelector((state) => state.filter.indivdialProduct);
  //const productId = useParams();

  return (
    <div className={classes.body}>
      {[individualData].map((product, index) => {
        return (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.container}
            key={index}
          >
            <h6 className={classes.categories}>{product.categorie}</h6>
            <h1 className={classes.header}>{product.title}</h1>
            <h5 className={classes.itemcolor}>
              Color: <span className={classes.colorname}>{product.color}</span>
            </h5>
            {/* <ul className={classes.sizes}>
              {product.size.map((size, index) => {
                return (
                  <li key={index} className={classes.sizesBody}>
                    <p className={classes.sizeText}>{size}</p>
                  </li>
                );
              })}
            </ul> */}

            <div className={classes.incromentbtns}>
              <button className={classes.minsBtn}>
                <img className={classes.iconsize} src={minusIcon} alt="-" />
              </button>
              <p className={classes.itemCount}>1</p>
              <button className={classes.plusBtn}>
                <img className={classes.iconsize} src={plusIcon} alt="+" />
              </button>
              <p className={classes.itemprice}>$ {product.price}</p>
            </div>
            <Button>Add to Cart</Button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductInfo;
