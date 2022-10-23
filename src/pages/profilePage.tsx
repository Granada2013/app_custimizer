import React from "react";
import Button from "../components/button";
import Input from "../components/input";

const avatarMale = require("../static/avatar_male.jpg");
const avatarFemale = require("../static/avatar_female.jpg");

const ProfilePage = () => {
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
            <Input
              type="text"
              name="Nickname"
              value="Anna"
              alignCenter={true}
            />
          </div>
          <div className="row">
            <Input
              type="email"
              name="Email"
              value="myemail@gmail.com"
              alignCenter={true}
            />
          </div>
          <div className="row">
            <Input
              type="text"
              name="Phone"
              value="89231261106"
              alignCenter={true}
            />
          </div>
          <div className="row">
            <Button text="Update profile" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
