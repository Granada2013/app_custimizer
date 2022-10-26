import React, { useState } from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Input from "../components/input";

const avatarMale = require("../static/avatar_male.jpg");
const avatarFemale = require("../static/avatar_female.jpg");

const ProfilePage = () => {
  const [avatarUrl, setAvatar] = useState(avatarFemale);
  const loadAvatar = (e: any) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setAvatar(url);
  };

  return (
    <React.Fragment>
      <section className="profile">
        <div className="profile__avatar row">
          <div className="avatar__wrapper">
            <img className="avatar__img" src={avatarUrl} />
          </div>
          <label htmlFor="avatar" className="avatar__upload">
            <Icon
              name="icon-download"
              viewBox="0 0 24 24"
              color="inherit"
              width={20}
              height={20}
              title="Upload"
            />
            <input
              type="file"
              id="avatar"
              style={{ display: "none" }}
              accept="image/jpg, image/jpeg, image/png"
              onChange={(e) => loadAvatar(e)}
            />
          </label>
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
      </section>
    </React.Fragment>
  );
};

export default ProfilePage;
