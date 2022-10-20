import React from "react";
import "./pages.css";
import Icon from "../components/icon";

const defaultImg = require("../static/logo1.png");

interface Props {
  show: boolean;
  setShow: () => void;
}
const NavBar = (props: Props) => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={defaultImg} className="nav__logo" alt={"logo"} />
      </div>
      <ul className="nav__right">
        <li className="nav__profile">
          <Icon name="icon-profile" color="custom" viewBox="0 0 30 30" />
          <p>Profile</p>
        </li>
        <li>Notifications</li>
        <li>Help</li>
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
