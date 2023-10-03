import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AntD from "./AntD";
import AntDHookForm from "./AntDHookForm";

const App = () => {
  return (
    <>
      <p>
        <NavLink to={"/antd"}>Validator from AntDesine</NavLink>
      </p>
      <p>
        <NavLink to={"/antDHookForm"}>Validator from react-hook-form</NavLink>
      </p>
      <Routes>
        <Route path="/antd" element={<AntD />} />
        <Route path="/antDHookForm" element={<AntDHookForm />} />
      </Routes>
    </>
  );
};
export default App;
