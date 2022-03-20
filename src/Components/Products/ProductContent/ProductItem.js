import React from "react";
import classes from "./ProductItem.module.css";
import ProductDetails from "./ProductDetails";

const ProductItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
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
      </div>
    </div>
  );
};

export default ProductItem;
