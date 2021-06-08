import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="ui image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Vishnu</div>
          <div className="description">vishn@gmail.com</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center floated" >Back to center</button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
