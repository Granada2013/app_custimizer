import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  value: string;
  onChange?: (val: string) => void;
  label?: string;
}

const InputColor = (props: Props) => {
  const [value, setValue] = useState(props.value);
  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e.target.value);
  };

  return (
    <div className="input_color__wrapper">
      <label htmlFor={props.name} className="input_label">
        {props.label}
      </label>
      <input
        type="color"
        value={props.value}
        onChange={handleChange}
        id={props.name}
        className="input_color"
      />
    </div>
  );
};

export default InputColor;
