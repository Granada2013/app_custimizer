import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  type: "text" | "email" | "password" | "number";
  value?: string;
  alignCenter?: boolean;
}

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value);

  return (
    <label htmlFor={props.name} className="input_label">
      {props.name}
      <input
        type={props.type}
        className="input"
        value={value}
        id={props.name}
        onChange={(e) => setValue(e.target.value)}
        style={{ textAlign: props.alignCenter ? "center" : "left" }}
      />
    </label>
  );
};

export default Input;
