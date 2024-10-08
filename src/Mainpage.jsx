import React from "react";
import "./Mainpage.css";
import "./Common.css";
import Navbar from './Navbar';
import {NavLink } from "react-router-dom";

function Mainpage()
{
    return (
      <>
       <Navbar /> 
       <header className="outt">

      <div className="des">
        <div className="welcomeheading">
          <h1 className="ab">Welcome!</h1>
        </div>
        <div className="middle">
          <div className="buttonn">
            <NavLink exact to="./Login" className="logg">LOGIN</NavLink>
          </div>
          <div className="button">
            <NavLink exact to="./Signup" className="logg">SIGN UP</NavLink>
          </div>
        </div>
      </div>
    </header>
   </>
    );
}

export default Mainpage;