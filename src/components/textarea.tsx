import React, { useState } from "react";
import "./components.css";

interface Props {
  name: string;
  label: string;
  cols?: number;
  rows?: number;
  autofocus?: boolean;
  width?: string;
}
const Textarea = (props: Props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.name} className="input_label">
        {props.label}{" "}
      </label>
      <textarea
        className="textarea"
        id={props.name}
        autoFocus={props.autofocus}
        cols={props.cols}
        rows={props.rows}
        style={{
          width: props.width || "100%",
        }}
      />
    </React.Fragment>
  );
};

export default Textarea;
