import React from "react";
import classes from "./AdminContent.module.css";
import "../../index.css";
//import AdminAddProduct from "./AdminAddProduct";
//import AdminProductList from "./AdminProductList";

const Admin = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <p className={classes.waringText}>I dont remember giving you access...</p>
        </div>
        {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          Add a product
          <AdminAddProduct />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          ProductsList
          <AdminProductList />
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
