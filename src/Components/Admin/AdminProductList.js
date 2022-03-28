import React from "react";
import AdminProductItem from "./AdminProductItem";
import classes from "./AdminProductList.module.css";

const AdminProductList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <ul className={classes.list}>
          <AdminProductItem />
          <AdminProductItem />
          <AdminProductItem />
          <AdminProductItem />
          <AdminProductItem />
        </ul>
      </div>
    </div>
  );
};

export default AdminProductList;
