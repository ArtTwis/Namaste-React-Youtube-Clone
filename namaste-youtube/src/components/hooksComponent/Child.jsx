import React, { memo } from "react";

const Child = ({ fn }) => {
  console.log("Child component");

  return (
    <div className="mt-5">
      <span className="text-white text-2xl font-bold">Child Component</span>
    </div>
  );
};

export default memo(Child);
