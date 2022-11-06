import React from "react";
import { useSelector } from "react-redux";
const twitter = require("../static/twitter.png");
const facebook = require("../static/facebook.png");
const linkedin = require("../static/linkedin.png");

const FooterBar = () => {
  const year = new Date().getFullYear();
  const copyRight = useSelector((state: any) => state.copyright);
  return (
    <footer className="footer">
      <p>
        {year} &#169; {copyRight}
      </p>
      <div>
        <div className="footer__icons">
          <img src={twitter} />
          <img src={facebook} />
          <img src={linkedin} />
        </div>
        <div className="footer__iconsCredit">
          {" "}
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/bogdan-rosu"
            title="Bogdan Rosu"
          >
            {" "}
            Bogdan Rosu{" "}
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
