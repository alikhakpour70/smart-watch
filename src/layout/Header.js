import "./layoutStayle.css";
import { FiMenu } from "react-icons/fi";
// import {  IoNotificationsCircleSharp } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";

import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  const menuHamdler = () => {
    setShow(!show);
  };

  return (
    <header className="header-container">
      <section className="header">
        <div className="right-header">
          <i onClick={menuHamdler}>
            <FiMenu />
          </i>
          <div className={show ? "menuSid" : " menuSid-false"}>
            <div>
              <p>header of navbar</p>
            </div>
            <div>
              <p>home</p>
              <p>shopping</p>
              <p>about us</p>
              <p>contect</p>
            </div>
          </div>
          <p className="smartWatch2">Smart Watch</p>

          {/* navbar of min-Width 765px  */}

          <div className="navBar-header">
            <p>home</p>
            <p>shopping</p>
            <p>about us</p>
            <p>contect</p>
          </div>
        </div>
        <p className="smartWatch">Smartt Watch</p>
        <div className="left-header">
          <i>
            <BsBellFill /> 
          </i>
        </div>
      </section>
    </header>
  );
};

export default Header;
