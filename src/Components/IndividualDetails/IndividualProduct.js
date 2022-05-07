import React, { useEffect, useCallback } from "react";
import classes from "../IndividualDetails/IndividualProduct.module.css";
import ProductImageDisplay from "./ProductImageDisplay";
import ProductInfo from "../IndividualDetails/ProductInfo";
import { motion } from "framer-motion";
import { imgBgslideRight as imgBgSlideRight } from "../../Animations/Products-Animations";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../../Hooks/use-http";
import "../../index.css";

const IndividualProduct = () => {
  const { sendRequest } = useHttp();
  const productId = useParams();
  const individualProductData = useSelector(
    (state) => state.http.individualProduct
  );

  const individualProductApi = useCallback(() => {
    sendRequest({
      typeOfRequest: "INDIVIDUALPRODUCT",
      method: "GET",
      url: `https://react-product-project-default-rtdb.firebaseio.com/Products/0.json`,
      data: {},
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [sendRequest]);

  useEffect(() => {
    individualProductApi();
  }, [individualProductApi]);

  return (
    <div className={classes.container}>
      {[individualProductData].map((product, index) => {
        return (
          <div key={index} className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <motion.div
                variants={imgBgSlideRight}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.leftbody}
              >
                <ProductImageDisplay
                  img={product.img}
                  extraImages={product.extraImages}
                />
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <ProductInfo
                id={product.id}
                title={product.title}
                price={product.price}
                size={product.size}
                categorie={product.categorie}
                color={product.color}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndividualProduct;
