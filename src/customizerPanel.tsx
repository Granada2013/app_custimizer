import React from "react";
import "./App.css";

interface Props {
  setShow: (val: boolean) => void;
}

const CustomizerPanel = (props: Props) => {
  const handleClose = () => {
    const aside = document.querySelector(".side");
    const mainContainer = document.querySelector(".mainContainer");
    if (mainContainer && aside) {
      setTimeout(() => {
        props.setShow(false);
        mainContainer.classList.remove("slide-out-main");
      }, 1200);
      aside.classList.remove("slide-in");
      aside.classList.add("slide-out");
      mainContainer.classList.add("slide-out-main");
    }
  };
  return (
    <aside className="side slide-in">
      <button className="icon_close" onClick={handleClose}>
        X
      </button>
    </aside>
  );
};

export default CustomizerPanel;
