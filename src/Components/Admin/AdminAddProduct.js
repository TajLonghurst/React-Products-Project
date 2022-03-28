import React from "react";
import classes from "./AdminAddProduct.module.css";
import ProductColor from "../Products/ProductCategories/ProductColor";
import ProductSize from "../Products/ProductCategories/ProductSize";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AdminAddProduct = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h5 className={classes.title}>Name</h5>
        <Input type={"text"} />
        <ProductSize />
        <h5 className={classes.title}>Categorie</h5>
        <Input type={"text"} />
        <h5 className={classes.title}>Cost</h5>
        <Input type={"text"} />
        <ProductColor />
        <h5 className={classes.title}>Gender</h5>
        <Input type={"text"} />
        <h5 className={classes.title}>Image Url</h5>
        <Input type={"text"} />
        <div className={classes.btnpostion}>
          <Button>Add Product</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
