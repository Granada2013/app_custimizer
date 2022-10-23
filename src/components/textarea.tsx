import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  label: string;
  cols?: number;
  rows?: number;
  autofocus?: boolean;
}
const Textarea = (props: Props) => {
  return (
    <label htmlFor={props.name} className="input_label">
      {props.label}
      <textarea
        className="textarea"
        id={props.name}
        autoFocus={props.autofocus}
        cols={props.cols}
        rows={props.rows}
      />
    </label>
  );
};

export default Textarea;
