import React from "react";
import "./About.css";
import "./Common.css";
import Navbar from './Navbar';
function About()
{
    return (
      <>
         <Navbar /> 
        <header className="outt">
      <div className="description_of_about">
        <div className="aboutheading">
          <h1 className="ab">About Virtual Guru</h1>
        </div>
        <h1 className="description_about">
        Virtual Guru is a free web-based education center which furnishes its users with premium instructive substance and educational content. The sole motivation behind this site/tool is to furnish information looking for people with a simple to utilize platform where they can undoubtedly discover, devour and sort out instructive substance with content association being the critical utilization of this platform.
        </h1>
      </div>
    </header>
    </>
    );
}

export default About;