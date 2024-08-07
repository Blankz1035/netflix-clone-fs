import React, { useEffect, useState } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])


  const transitionNavBar = () =>{
    if (window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeRoc_BhrP-jahuwf0Hrxe48LiP6DiHWiiw&s"
          alt="Netflix Logo"
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
