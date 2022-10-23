import React from "react";
import "./components.css";

interface Props {
  text: string;
  onClick: (e: any) => void;
}

const Button = (props: Props) => {
  return (
    <button className="submit" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
