import React from "react";
import "./components.css";

interface Props {
  text: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    if (props.onClick) props.onClick();
  };

  return (
    <button className="submit" onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
