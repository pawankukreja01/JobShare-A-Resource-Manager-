import React, { useEffect } from "react";
import { useState } from "react";
import "./Common.css";
import "./Signup.css"
import Navbar from './Navbar';
import { addUser } from "./api";
import { validEmail } from "./Regex";

import {NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Check } from "@material-ui/icons";
let arr=[{username:'',email:'',password:'',phone:0,picture:' '}];    
         //input to send and confirm
         

         function Signup()
         {
          const [emailErr, setEmailErr] = useState(false);
         const [pwdError, setPwdError] = useState(false);
         let history = useHistory();

        /* useEffect(() => {
          setEmailErr(false)
          setPwdError(false)

         },[]);
*/
        const validate = () => {
          if (!validEmail.test(arr[0].email)) {
             setEmailErr(true);
          }
          if(arr[0].password.length<=8)
          {
            setPwdError(true)
          }
          
       };
const conditionalcheck = async() =>{
 

  if (!validEmail.test(arr[0].email)) {
    alert("email wrong")
 }
 else if(arr[0].password.length<=8)
 {
   alert("password wrong")
 }
  else
  {
  
   console.log(arr[0])
   console.log("vinesh")
  const user=await addUser(arr[0])
  console.log(user.data)





    if(user.data=="no")
    {
      
      return "./Signup";
      
      
    }
    else if(user.data=="no1")
    {
      
    }
    else if(user.data=="no2")
    {
     
    }
    else
    {
      console.log("yes")
     
  history.push('./Successfullsignup');
    return "./Homepage";
    return "./Successfullsignup";
    }

  }

  setEmailErr(false)
  setPwdError(false)
    
}
function setName(name)
{
  arr[0].username=name.target.value;
}
function setEmail(email)
{
  arr[0].email=email.target.value;
}
function setPassword(password)
{
  arr[0].password=password.target.value;
}
function setNumber(number)
{
  arr[0].phone=number.target.value;
}

    return (
      <>
       <Navbar /> 
<header className="outt">
      <div className="descriptions">
        <div className="signupheading">
          <h1 className="ab">signup</h1>
        </div>
        <div className="middlestuff">
          <div className="username">
            Username<input
              className="searchbar1"
              type="search"
              id=""
              placeholder="Enter Username"
              onChange={setName}
            />
          </div>
          <div className="username">
            Email<input
              className="searchbar3"
              type="email"
              id=""
              placeholder="Enter Email"
              onChange={setEmail}
            />
            <div className="username u1">
              Number<input
                className="searchbar3 num"
                type="search"
                id=""
                placeholder="Enter Phonenumber"
                onChange={setNumber}
              />
            </div>
          </div>
          <div className="password">
            password
            <input
              className="searchbar2"
              type="password"
              id=""
              name=""
              placeholder="Enter Password"
              onChange={setPassword}
            />
          </div>
          <div className="signupbutton_for_signup">
            <button onClick={conditionalcheck} className="log abc1">signup</button>

          </div>
       
        </div>
      </div>
    </header>
    </>
    );
}



export default Signup;