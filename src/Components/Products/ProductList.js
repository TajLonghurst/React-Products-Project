import React, { useCallback, useEffect } from "react";
import classes from "./ProductList.module.css";
import ProductItem from "./ProductContent/ProductItem";
import useWindowSize from "../../Hooks/use-windowSize";
import { motion } from "framer-motion";
import { productsList } from "../../Animations/Products-Animations";
import { useSelector } from "react-redux";
import "../../index.css";
import useHttp from "../../Hooks/use-http";

const ProductList = () => {
  const { isMobileView: mobile } = useWindowSize();
  const Data = useSelector((state) => state.http.products);
  // const [productData, setProductData] = useState(Data);
  const { isLoading, error, sendRequest } = useHttp();

  const productListApi = useCallback(() => {
    sendRequest({
      //typeOfRequest: "PRODUCTDATA",
      method: "GET",
      url: `https://react-product-project-default-rtdb.firebaseio.com/Products.json`,
      data: {},
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [sendRequest]);

  useEffect(() => {
    productListApi();
  }, [productListApi]);

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
          {Data.map((productDetail) => {
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
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;
