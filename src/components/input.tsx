import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  value?: string;
}

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value);

  return (
    <label htmlFor={props.name} className="input_label">
      {props.name}
      <input
        className="input"
        value={value}
        id={props.name}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default Input;
