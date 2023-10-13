import { React, useState } from "react";

const FunctionComponent = ({ name }) => {
  const [newName, setName] = useState(name);

  return (
    <>
      <div>{newName} </div>
      <button onClick={() => setName((name) => name + "fffffff")}>
        Change name{" "}
      </button>
    </>
  );
};

export default FunctionComponent;
