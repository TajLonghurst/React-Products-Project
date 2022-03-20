import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsFilter from "./ProductsFilter";
import ProductList from "./ProductList";
import ModalMobileFilter from "../Modals/FilterModal/ModalMobileFilter";
import useWindowSize from "../../Hooks/use-windowSize";
import classes from "./ProductsContainer.module.css";
import filterIcon from "../../Assets/Icons/bx-filter.svg";
import "../../index.css";
import { uiActions } from "../../Store/ui-slice";

const ProductsContainer = () => {
  const { isMobileView: mobile } = useWindowSize();
  const filterIsClicked = useSelector((state) => state.ui.moblieFilterIsActive);
  const dispatch = useDispatch();

  const onClickMobileFilterBtn = () => {
    dispatch(uiActions.mobileFilterHandler());
  };

  return (
    <div className={classes.container}>
      {mobile && (
        <button
          onClick={onClickMobileFilterBtn}
          type="button"
          className={classes.mobileFilterBtn}
        >
          <img
            className={classes.filterIcon}
            src={filterIcon}
            alt="Img failed"
          />
        </button>
      )}
      {filterIsClicked && <ModalMobileFilter />}
      {!mobile && <ProductsFilter />}
      <ProductList />
    </div>
  );
};

export default ProductsContainer;
