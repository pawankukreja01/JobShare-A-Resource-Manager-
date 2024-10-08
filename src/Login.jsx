import React from "react";
import react, { useState } from 'react';

import "./Login.css";
import "./Common.css";
import { signIn } from "./api";
import Navbar from './Navbar';

import {connect} from 'react-redux'
import { saveUsernane1 } from "./redux/Actions";
import { useHistory } from 'react-router-dom';

import {NavLink } from "react-router-dom";
let arr=[{email:"",password:''}];    //to send and check
const initialValue1 = {
    
    
    
  email1: '',
  username: '',

 
}

function inputusername(val)
{
  arr[0].email=val.target.value;
}
function inputpassword(val)
{
  arr[0].password=val.target.value;
}

function Login(props)
{
  let history = useHistory();

  const [d, setD] = useState(initialValue1);
  const {   email1,username} = d;


  const checkkk = async() =>
{
var user2;

   user2=await signIn(arr[0]);
  console.log(user2.data);

  if(user2.data=="no")
  {
   
    return "./";
  }
  else 
  {
    


    if(arr[0].email==="")
    {
      arr[0].email=d.props.email
    }
    
    d.username=user2.data
    d.email1=arr[0].email

    
    
    

    props.saveUsernane(d);

    console.log(d);
            console.log('HII');
            console.log(props.username);
            console.log(props.email);
            console.log('HII2');
            
            arr[0].password=''
    history.push('./Homepage');
    return "./Homepage";
  
  }
  
}
    return (
      <>
         {/* < Full /> */}
       <Navbar />  
         <header className="outt">
      <div className="description_of_login">
        <div className="loginheading">
          <h1 className="ab">LOG IN</h1>
        </div>
        <div className="middlestuff_of_login">
          <div className="username_of_login">
            Email_ID  :<input
              className="searchbar1_of_login"
              type="search"
              id=""
              placeholder="Enter Email"
              onChange={inputusername}
            />
          </div>
          <div className="username_of_login">
            password
            <input
              className="searchbar2_of_login"
              type="password"
              id=""
              name=""
              placeholder="Enter Password"
              onChange={inputpassword}
            />
          </div>
          <div className="log">
            <NavLink exact to={checkkk} className="loginbutton_of_login">LOGIN</NavLink>
          </div>
        </div>
      </div>
    </header>
    </>
    );
}


const mapStateToProps = state => {
  return {
    username: state.reducers.username,
    email:state.reducers.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUsernane: number => dispatch(saveUsernane1(number))
    
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);