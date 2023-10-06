import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#e9e9e9",
          padding: "20px",
        }}
      >
        <NavLink to={"/antd"}>Validator from AntDesine</NavLink>
        <NavLink to={"/antDHookForm"}>Validator from react-hook-form</NavLink>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
