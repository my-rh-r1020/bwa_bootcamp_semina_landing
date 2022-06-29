import React from "react";

export default function Button({ action, children, className }) {
  return (
    <button type="button" className={className} onClick={action}>
      {children}
    </button>
  );
}
