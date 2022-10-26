import React, { useState, useEffect } from "react";
import "./components.css";

interface Props {
  name: string;
  showTip: boolean;
  setShowTip: (val: string) => void;
}

const Tip = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.showTip) {
      setShow(true);
      setTimeout(() => {
        const body = document.body;
        const tipElement = body.querySelector(`#${props.name}_tip`);
        if (tipElement) {
          tipElement.classList.remove("invisible");
          tipElement.classList.add("visible");
          setTimeout(
            () =>
              body.addEventListener(
                "click",
                (e: any) => {
                  tipElement.classList.remove("visible");
                  tipElement.classList.add("invisible");
                  if (
                    !e.target.getAttribute("data-tip") ||
                    e.target.getAttribute("data-tip") === props.name
                  )
                    props.setShowTip("");
                },
                { once: true }
              ),
            100
          );
        }
      }, 100);
    } else setShow(false);
  }, [props.showTip]);

  return (
    <React.Fragment>
      {show && (
        <div className="tip invisible" id={`${props.name}_tip`}>
          Use arrow buttons to see how this page wil look like after
          customization!
        </div>
      )}
    </React.Fragment>
  );
};

export default Tip;
