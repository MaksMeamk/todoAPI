import React from "react";
import CustomInput from "../CustomInput";
import Todo from "../Todo";

const Tasks = () => {
  return (
    <div>
      <h1>What's the plan for today</h1>
      <CustomInput />
      <Todo />
    </div>
  );
};
export default Tasks;
