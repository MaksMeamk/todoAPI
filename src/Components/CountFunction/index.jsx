import React from "react";

const CountClass = React.memo(
  ({ count }) => {
    return (
      <span style={{ display: "inline-block", width: "30px" }}>{count}</span>
    );
  },
  ({ count: prevCount }, { count: nextCount }) =>
    nextCount % 2,
);
export default CountClass;
