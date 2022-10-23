import React from "react";
import "./pages.css";
import Icon from "../components/icon";
import Tip from "../components/tip";

const defaultImg = require("../static/logo1.png");

interface Props {
  show: boolean;
  setShow: () => void;
}
const NavBar = (props: Props) => {
  const showTip = (tip: string) => {
    const body = document.body;
    const tipElement = body.querySelector(`[data-tip=${tip}]`);
    if (tipElement) {
      tipElement.classList.remove("invisible");
      tipElement.classList.add("visible");
      setTimeout(
        () =>
          body.addEventListener(
            "click",
            () => {
              tipElement.classList.remove("visible");
              tipElement.classList.add("invisible");
            },
            { once: true }
          ),
        100
      );
    }
  };
  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={defaultImg} className="nav__logo" alt={"logo"} />
      </div>
      <ul className="nav__right">
        <li className="nav__profile">
          <Icon name="icon-profile" color="custom" viewBox="0 0 30 30" />
          <p onClick={() => showTip("profile")}>Profile</p>
          <Tip name="profile" />
        </li>
        <li>
          <p onClick={() => showTip("notifications")}>Notifications</p>{" "}
          <Tip name="notifications" />
        </li>
        <li>
          <p onClick={() => showTip("help")}>Help</p> <Tip name="help" />
        </li>
        {props.show ? null : (
          <li className="nav__button">
            <button onClick={props.setShow}>Start customization!</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
