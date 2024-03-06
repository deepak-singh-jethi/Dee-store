import React, { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

const Modal = ({ children, isOpen }) => {
  const ref = useRef();
  useEffect(() => {
    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
    return () => {};
  }, [isOpen]);

  return createPortal(
    <dialog ref={ref}>{children}</dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
