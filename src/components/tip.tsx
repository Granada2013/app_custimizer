import React from "react";
import "./components.css";

interface Props {
  name: string;
}

const Tip = (props: Props) => {
  return (
    <div className="tip invisible" data-tip={props.name}>
      Use arrow buttons to see how this page wil look like after customization!
    </div>
  );
};

export default Tip;
