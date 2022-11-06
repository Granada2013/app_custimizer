import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  type: "text" | "email" | "password" | "number";
  value?: string;
  alignCenter?: boolean;
  width?: string;
  onChange?: (val: string) => void;
  onBlur?: any;
}

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value);
  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor={props.name} className="input_label">
        {props.name}
      </label>
      <input
        type={props.type}
        className="input"
        value={value}
        id={props.name}
        onChange={handleChange}
        onBlur={props.onBlur}
        style={{
          textAlign: props.alignCenter ? "center" : "left",
          width: props.width || "100%",
        }}
      />
    </React.Fragment>
  );
};

export default Input;
