import React from "react";
import { Route, Routes } from "react-router-dom";
import AntD from "./AntD";
import AntDHookForm from "./AntDHookForm";
import { Layout } from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/antd" element={<AntD />} />
          <Route path="/antDHookForm" element={<AntDHookForm />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
