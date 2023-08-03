import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import openai from "../../assets/openai.jpg";

const Menu = () => {
  return (
    <>
      <div className="gtp4__navbar-links_logo">
        <img src={openai} alt="logo" />
      </div>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt4">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt4__navbar">
      <div className="gpt4_navbar-links">
       
        <div className="gpt4__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt4__navbar-menu_container scale-up-center">
            <div className="gpt4__navbar-menu_container-links">
              <Menu />
              <div className="gpt4__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
