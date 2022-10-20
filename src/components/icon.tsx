import React from "react";
import Icons from "../static/sprite.svg";

interface Props {
  name: string;
  color: string;
  viewBox: string;
  height?: number;
  width?: number;
}

const Icon = (props: Props) => {
  return (
    <svg
      viewBox={props.viewBox}
      className={`o-icon ${props.name}`}
      width={props.width ? props.width + "px" : "30px"}
      height={props.height ? props.height + "px" : "30px"}
      style={{
        fill:
          props.color === "custom" ? "rgb(var(--color-custom))" : props.color,
      }}
    >
      <use xlinkHref={`${Icons}#${props.name}`} />
    </svg>
  );
};

export default Icon;
