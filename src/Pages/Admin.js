import React, { Fragment } from "react";
import NavigationBar from "../Components/Navigation/NavigationBar";
import AdminContent from "../Components/Admin/AdminContent";

const Admin = () => {
  return (
    <Fragment>
      <NavigationBar />
      <AdminContent />
    </Fragment>
  );
};

export default Admin;
