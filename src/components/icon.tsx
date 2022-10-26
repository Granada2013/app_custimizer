import React from "react";
import Icons from "../static/sprite.svg";

interface Props {
  name: string;
  color: string;
  viewBox: string;
  height?: number;
  width?: number;
  title?: string;
}

const Icon = (props: Props) => {
  return (
    <span title={props.title}>
      <svg
        viewBox={props.viewBox}
        className={`o-icon ${props.name}`}
        width={props.width ? props.width + "px" : "30px"}
        height={props.height ? props.height + "px" : "30px"}
        style={{
          fill: props.color === "custom" ? "var(--color-custom)" : props.color,
        }}
      >
        <use xlinkHref={`${Icons}#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
