import React from "react";
import classes from "./ProductItem.module.css";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsItemHover } from "../../../Animations/Products-Animations";

const ProductItem = (props) => {
  return (
    <Link to={`/products/${props.id}`} className={classes.container}>
      <motion.div
        variants={productsItemHover}
        whileHover="whileHover"
        className={classes.card}
      >
        <div className={classes.cardBody}>
          <div className={classes.imgBody}>
            <img
              className={classes.img}
              src={props.img}
              alt="Img Failed to load"
            />
          </div>
          <ProductDetails
            key={props.id}
            title={props.title}
            price={props.price}
            size={props.size}
            categorie={props.categorie}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductItem;
