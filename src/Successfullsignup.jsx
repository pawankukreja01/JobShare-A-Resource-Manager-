import React from "react";
import {NavLink} from "react-router-dom";
import './Successfull.css';
function Successfullsignup()
{
  return (
    <>
      <div className="box">
        <h1>Successfull Signup</h1>
        <NavLink exact to='./'  className='goback'>Go Back to Mainpage</NavLink>
      </div>
    </>
  );
}

export default Successfullsignup;