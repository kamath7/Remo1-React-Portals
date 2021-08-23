import React from "react";

const Modal = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  );
};

export default Modal;
