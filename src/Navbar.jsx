import React from "react";
import { NavLink } from "react-router-dom";
import "./Common.css";
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Orbitron&family=Permanent+Marker&display=swap" rel='stylesheet' type='text/css'></link>
function Navbar()
{
    return (
            <>
      <div className="bar">
        <div className="barr">
          <NavLink exact to="./" className="head" style={{fontFamily: "Raleway" }} ><h1 className="guruu">VIRTUAL GURU</h1></NavLink>
        </div>
        <div className="options">
          <div className="option_about">
            <NavLink className="about" exact to="./About" style={{fontFamily: "Orbitron"}}>About</NavLink>
          </div>
          <div className="option_contact">
            <NavLink exact className="contact" to="./Contact" style={{fontFamily: "Orbitron"}}>Contact</NavLink>
          </div>
        </div>
      </div>
            </>
    );
}

export default Navbar;