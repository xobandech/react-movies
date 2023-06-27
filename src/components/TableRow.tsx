import React, { ReactNode } from "react";

type TableRowProps = {
  children: ReactNode[];
}

const TableRow = ({ children }: TableRowProps) => {
  
  return <div className="flex">
    {children && children.map((child, index) => (
      <div key={index} className="flex-1">{child}</div>
    ))}
  </div>;
};

export default TableRow;
