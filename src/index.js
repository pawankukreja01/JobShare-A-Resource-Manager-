import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx';
import { Provider } from "react-redux";

import store from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
const name='abdullah';
//import './Mainpage.css';
//import './Common.css';

let arr=[10,9,8,7,6,5,4,3,2,1];
function F2(val)
{
    return (<ul>
    <li>{val}</li>
  </ul>);
}
function F11()
{
  return( 
    arr.map(F2));
}
function F3()
{
   const [count,incCount]=useState(0);
   const [cc,incC]=useState(0);
   function F22()
   {
     incC(cc+0.1);
   };
    function F33()
    {
        incCount(count+1);
    };
    return (<><h1>HI THERE MY FRIEND {name}. I know your age is </h1>
       <h1>lets count to 10 now</h1>
       <F11  />
       <h1>yo</h1>
       <h2>count : {count}</h2>
       <button onClick={F33} style={{marginTop: '50px'} }>press</button>
       <h2>count {F22} {cc}</h2>
       </>
       );
}
   ReactDOM.render(
     <Provider store={store}>
   <BrowserRouter>
   <App />
   </BrowserRouter>  
   </Provider>
    ,
    document.getElementById('root')
    );
//  ReactDOM.render(<> <App />  </>,document.getElementById('root'));
 // );

