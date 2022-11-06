import React, { useState } from "react";
import "./pages.css";
import Icon from "../components/icon";
import Tip from "../components/tip";

interface Props {
  show: boolean;
  setShow: () => void;
}
const Header = (props: Props) => {
  const [showTip, setShowTip] = useState("");

  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__logo" />
      </div>
      <ul className="nav__right">
        <li className="nav__profile">
          <Icon name="icon-profile" color="custom" viewBox="0 0 30 30" />
          <p data-tip="profile" onClick={() => setShowTip("profile")}>
            Profile
          </p>
          <Tip
            name="profile"
            setShowTip={setShowTip}
            showTip={showTip === "profile"}
          />
        </li>
        <li>
          <p
            data-tip="notifications"
            onClick={() => setShowTip("notifications")}
          >
            Notifications
          </p>{" "}
          <Tip
            name="notifications"
            setShowTip={setShowTip}
            showTip={showTip === "notifications"}
          />
        </li>
        <li>
          <p data-tip="help" onClick={() => setShowTip("help")}>
            Help
          </p>{" "}
          <Tip
            name="help"
            setShowTip={setShowTip}
            showTip={showTip === "help"}
          />
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

export default Header;
