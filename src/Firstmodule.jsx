import React from "react";
import Mainpage from './Mainpage';
import About from './About'
import Contact from './Contact'
import Full from './Full';
import Login from './Login';
import Signup from './Signup'
import Successfullsignup from './Successfullsignup';
import { Route } from 'react-router';
function Firstmodule()
{
    return (
      <>
        < Full /> 
      <switches>
            <Route  exact path='/' component={Mainpage} />
             <Route exact path='/About' component={About} /> 
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Login' component={Login} /> 
            <Route exact path='/Successfullsignup' component={Successfullsignup} />
            </switches>
      </>
    );
}
export  default Firstmodule;