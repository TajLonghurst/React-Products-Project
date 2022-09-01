import React, { useCallback, useEffect } from "react";
import { productsList } from "../../Animations/Products-Animations";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProductItem from "./ProductContent/ProductItem";
import useWindowSize from "../../Hooks/use-windowSize";
import useHttp from "../../Hooks/use-http";
import classes from "./ProductList.module.css";
import "../../index.css";

const ProductList = () => {
  const { sendRequest } = useHttp();
  const { isMobileView: mobile } = useWindowSize();
  const Data = useSelector((state) => state.filter.filtredProductData);
  const DataHttp = useSelector((state) => state.http.products);
  //Need to add Loading & Error sideEffects

  const productListApi = useCallback(() => {
    sendRequest({
      typeOfRequest: "PRODUCTLISTDATA",
      method: "GET",
      url: `${process.env.REACT_APP_PRODUCTSLIST_FIREBASE_API}.json`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [sendRequest]);

  useEffect(() => {
    productListApi();
  }, [productListApi]);

  const noData = <p>No Avaivale Products </p>;

  const isMobileView = mobile
    ? classes.mobileContainer
    : classes.desktopContainer;

  return (
    <div className={isMobileView}>
      <div className={classes.contentbody}>
        <motion.div
          variants={productsList}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="row"
        >
          {DataHttp.length > 0
            ? DataHttp.map((productDetail) => {
                return (
                  <div
                    key={productDetail.id}
                    className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12"
                  >
                    <ProductItem
                      id={productDetail.id}
                      img={productDetail.img}
                      title={productDetail.title}
                      price={productDetail.price}
                      size={productDetail.size}
                      categorie={productDetail.categorie}
                    />
                  </div>
                );
              })
            : noData}
          ;
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;
