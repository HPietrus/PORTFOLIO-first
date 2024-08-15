import React, { useState, useRef } from "react";
import "./Navbar.css";
import flio from "../../assets/flio.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={flio} alt="folio" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p onClick={() => setMenu("Home")}>Home</p>
          </AnchorLink>
          {menu === "Home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#About Me">
            <p onClick={() => setMenu("About Me")}>About Me</p>
          </AnchorLink>
          {menu === "About Me" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Services">
            <p onClick={() => setMenu("Services")}>Services</p>
          </AnchorLink>
          {menu === "Services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contacts">
            <p onClick={() => setMenu("Contacts")}>Contacts</p>
          </AnchorLink>
          {menu === "Contacts" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#Contacts">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
