import React from "react";

const TableRow = ({ children }) => {
  return <div className="flex">
    {children.map((child, index) => (
      <div key={index} className="flex-1">{child}</div>
    ))}
  </div>;
};

export default TableRow;
