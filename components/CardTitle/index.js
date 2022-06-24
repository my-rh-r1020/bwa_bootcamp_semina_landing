import React from "react";

export default function CardTitle({ subtitle, title }) {
  return (
    <>
      <div className="sub-title mb-1" id="grow-today">
        <span className="text-gradient-pink">{subtitle}</span>
      </div>
      <div className="title">{title}</div>
    </>
  );
}
