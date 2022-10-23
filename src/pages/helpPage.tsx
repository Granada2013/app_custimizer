import React from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Input from "../components/input";
import Textarea from "../components/textarea";

const HelpPage = () => {
  return (
    <React.Fragment>
      <h1>If you have any questions, please submit the form</h1>

      <p>We will answer as soon as possible!</p>

      <form className="help_form">
        <div>
          <Input type="text" name="Subject" />
        </div>
        <div className="row">
          <Textarea
            name="message"
            label="Type your message here"
            cols={1}
            rows={5}
          />
        </div>
        <div className="row">
          <Button text="Send" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default HelpPage;
