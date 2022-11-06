import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Input from "./components/input";
import InputColor from "./components/inputColor";
import * as consts from "./store/consts";
import State from "./store/store";

interface Props {
  setShow: (val: boolean) => void;
}
const CustomizerPanel = (props: Props) => {
  const state: any = useSelector((state) => state);
  const [customColor, setCustomColor] = useState<string>(state.custom);
  const [footerColor, setFooterColor] = useState<string>(state.footer);
  const [logo, setLogo] = useState<string>("");
  const [copyRight, setCopyRight] = useState<string>(state.copyright);

  const dispatch = useDispatch();

  const handleCustomize = (
    parametr: "custom" | "footer" | "logo" | "copyright",
    value: string
  ) => {
    switch (parametr) {
      case "custom": {
        setCustomColor(value);
        dispatch({ type: consts.SET_CUSTOM, payload: value });
        return;
      }
      case "footer": {
        setFooterColor(value);
        dispatch({ type: consts.SET_FOOTER, payload: value });
        return;
      }
      case "logo": {
        setLogo(value);
        dispatch({ type: consts.SET_LOGO, payload: value });
        return;
      }
      case "copyright": {
        setCopyRight(value);
        dispatch({ type: consts.SET_COPYRIGHT, payload: value });
        return;
      }
      default:
        return;
    }
  };

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
      <section className="row_large">
        <h3>Custom color</h3>
        <InputColor
          value={customColor}
          name="customColorPick"
          label="Select color"
          onChange={(value: string) => handleCustomize("custom", value)}
        />
      </section>
      <section className="row_large">
        <h3>Footer color</h3>
        <InputColor
          value={footerColor}
          name="footerColorPick"
          label="Select color"
          onChange={(value: string) => handleCustomize("footer", value)}
        />
      </section>
      <section className="row_large">
        <h3>Logo image</h3>
      </section>
      <section className="row_large">
        <h3>Copyright</h3>
        <Input
          type="text"
          name="Type here"
          value={copyRight}
          width="70%"
          onChange={(value: string) => handleCustomize("copyright", value)}
        />
      </section>
    </aside>
  );
};

export default CustomizerPanel;
