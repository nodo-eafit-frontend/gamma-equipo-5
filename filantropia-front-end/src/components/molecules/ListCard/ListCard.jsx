import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { children, name } = props;
  const nameWithFormat = name.split(" ").join("");
  return (
    <div className={`listCards ${!!name ? nameWithFormat : ""}`}>
      {children}
    </div>
  );
};
