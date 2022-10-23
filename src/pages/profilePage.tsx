import React from "react";
import Button from "../components/button";
import Input from "../components/input";

const avatarMale = require("../static/avatar_male.jpg");
const avatarFemale = require("../static/avatar_female.jpg");

const ProfilePage = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="profile">
        <div className="profile__avatar row">
          <div className="avatar__wrapper">
            <img className="avatar__img" src={avatarFemale} />
          </div>
        </div>
        <form className="profile_info">
          <div className="row">
            <Input name="Nickname" value="Anna" />
          </div>
          <div className="row">
            <Input name="Email" value="myemail@gmail.com" />
          </div>
          <div className="row">
            <Input name="Phone number" value="89231261106" />
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <Button text="Update" onClick={handleClick} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
