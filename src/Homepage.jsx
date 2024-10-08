import  { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Homepage.css';
import image1 from "./images/vinesh.jpg";
import image2 from "./images/usama.jpg";
import { searchh123 } from "./redux/Actions";
import {connect} from 'react-redux'

import { addSearch, getContinue, getPlaylist, getRecommend, getUsers } from "./api";
import { saveUsernane1 } from "./redux/Actions";
import image3 from "./maxresdefault.jpg";
let videolist=[image1,image1,image1,image1,image2,image2,image2];
let videolist1=[image1,image1,image1,image1,image2,image2,image2];
let videolist2=[image1,image1,image1,image1,image2,image2,image2];

let arr2=[]

let flag=0,flag1=0,flag2=0;
let i,g,d,n,s=0;
let username='';
let i1,g1,d1,n1,s1=0;
let i2,g2,d2,n2,s2=0;
let searchh;

let searchhh='';


function Homepage(props)
{
  const [playlist, setPlaylist] = useState([]);
  const [playlist1, setPlaylist1] = useState([]);
  const [playlist2, setPlaylist2] = useState([]);
  const [img, setimg] = useState([]);
  const [f,setF]=useState();
  const [f1,setF1]=useState();
  const [f2,setF2]=useState();
  useEffect(() => {
    props.saveUsernane("")
    searchh=''
    username=props.username
    console.log("me hi hu")
    console.log(props.email)
    getAllPlaylist();
     setF(0)
     setF1(0)
     setF2(0)

     getUse()
    }, []);


    const getAllPlaylist = async () => {
      let response = await getPlaylist();
      console.log("hi")
      console.log(response.data)
      setPlaylist(response.data);
  }

  const getUse =async ()=>{
    var id
    let response = await getUsers()
    for(var i=0;i<response.data.length;i++)
    {
      console.log(response.data[i].email)
      console.log(props.email)
      
      if(response.data[i].email===props.email)
      {
         id=response.data[i]._id
         setimg(response.data[i].picture)
      }
    }
    console.log("yes yes yes")
    console.log(id)
    console.log(response.data)

    arr2=await getContinue();
    console.log(arr2)

    for(var i=0;i<arr2.data.length;i++)
    {
      if(id/1!=arr2.data[i].userId/1)
      {
        arr2.data.splice(i,1)
        i=i-1
      }
    }
    let arr3=await getPlaylist()

     var temp=0
    for(var i=0;i<arr3.data.length;i++)
    {
      temp=0
      for(var j=0;j<arr2.data.length;j++)
      {
        if(arr2.data[j].playlistId/1===arr3.data[i]._id/1)
        {
            temp=1
        }
      }

      if(temp===0)
      {
        arr3.data.splice(i,1)
        i=i-1
      }
    }

    console.log(arr3)
    setPlaylist1(arr3.data)

    let arr4=await getRecommend();
    console.log(arr4)

    for(var i=0;i<arr4.data.length;i++)
    {
      if(id/1!=arr4.data[i].userId/1)
      {
        arr4.data.splice(i,1)
        i=i-1
      }
    }


    let arr5=await getPlaylist()

     var temp=0
    for(var i=0;i<arr5.data.length;i++)
    {
      temp=0
      for(var j=0;j<arr4.data.length;j++)
      {
        if(arr4.data[j].playlistId/1===arr5.data[i]._id/1)
        {
            temp=1
        }
      }

      if(temp===0)
      {
        arr5.data.splice(i,1)
        i=i-1
      }
    }

    console.log(arr5)
    setPlaylist2(arr5.data)

    
  }
        function switchvid()
{ 
  console.log("ji")
  if(((f*4)+5)<playlist.length)
  setF(f+1)
  console.log(f)
  console.log("ji")
          }
 function switchvid1()
{ 
  console.log("ji")
  if(((f1*4)+5)<playlist.length)
  setF1(f1+1)
  console.log(f1)
  console.log("ji")    
}
 function switchvid2()
{ 
  console.log("ji")
  if(((f2*4)+5)<playlist.length)
  setF2(f2+1)
  console.log(f2)
  console.log("ji")
}
     function switchvidback()
{ 
   if(f!=0)
   {
     setF(f-1)
   }
}
     function switchvidback1()
{ 
  if(f1!=0)
  {
    setF1(f1-1)
  }
}
     function switchvidback2()
{ 
  if(f2!=0)
  {
    setF2(f2-1)
  }

}

function a1()
{
  console.log("a1")
  console.log(playlist.length)
  d=-1000
}
function a2()
{
  console.log("a2")
  console.log(playlist.length)
  d=d+1
}
function a3()
{
  console.log("a3")
  console.log(playlist.length)
  i=playlist.length-1
  console.log(g)
  console.log(i)

}
function a4()
{
  console.log("a4")
  console.log(playlist.length)
}



function a11()
{
  console.log("a1")
  console.log(playlist.length)
  d1=-1000
}
function a21()
{
  console.log("a2")
  console.log(playlist.length)
  d1=d1+1
}
function a31()
{
  console.log("a3")
  console.log(playlist.length)
  i1=playlist.length-1
  console.log(g1)
  console.log(i1)

}
function a41()
{
  console.log("a4")
  console.log(playlist.length)
}



function a12()
{
  console.log("a1")
  console.log(playlist.length)
  d2=-1000
}
function a22()
{
  console.log("a2")
  console.log(playlist.length)
  d2=d2+1
}
function a32()
{
  console.log("a3")
  console.log(playlist.length)
  i2=playlist.length-1
  console.log(g2)
  console.log(i2)

}
function a42()
{
  console.log("a4")
  console.log(playlist.length)
}

const onValueChange = (e) => {
 
  searchh=e.target.value
  
  props.saveUsernane(searchh)

  
  
}

const ser  = async () => {
  props.saveUsernane(searchh)
  const user2=await addSearch(searchh)
  console.log("mera bhai")
}

    return ( <div className="maincontainer2">
        <div className="mainnavbar2">
        <NavLink exact to='/Homepage' className="webtitlee2">
          <span className="titleee2"> Virtual Guru </span>
        </NavLink>
        <div className="searchbardiv2">
            <input type="text" placeholder="Search a playlist" className="searchinput2" onChange={(e) => onValueChange(e)}  value={searchh}/>
            <button className="searchbutt2"> <NavLink onClick={ser} exact to='/Search' className="com" >Search</NavLink></button>
        </div>
        <div className="profiledivv2">
        <button className="profilee2" ><img src={img} alt="" className="profilepicc2" height='50px'  />
        <div className="subdivv2"><ul><li> <NavLink exact to='/editprofile' className="logoutb" > View Profile</NavLink></li> <li> <NavLink exact to='/' className="logoutb" >Logout   </NavLink></li></ul></div>  </button> </div>
      </div>
      <div className="innerdiv2">
          <div className="innersubdiv1">
              <h1 className="options2">Options</h1>
              <button className="yourplaylist2"><NavLink exact to='/yourplaylist' className="logoutb" >View your playlists</NavLink></button>
              <button className="likedplaylist2"><NavLink exact to='/rated' className="logoutb" > View rated playlists</NavLink></button>
              
          </div>
          <div className="innersubdiv22">
              <h1 className='homepageheading'>Welcome back {username}!</h1>
                  <div className="downpage2"  >
          <h1 className="watchmore2" >Popular right now</h1>
        <div className="morevids2">
        <div className="imp11"><button onClick={switchvidback} className='backk' ></button></ div >
        {
          
          g=f*4
          ,
          
          i=g+4,
          g=g-1,
          d=0,
          n=0,
          
          d=0,
          playlist.length >i?
          a4()
          :
          a3()
          ,
          playlist.map((p)=>(
            
            

            
            
            d>g&& playlist[i]._id!=p._id?
            <div className="viddiv"><NavLink className="playlist2" exact to={`/Playlistpage/${p._id}`} ><img src={p.picture} alt="" className='thumbnail2' height='150px'  /></NavLink></div>
            : playlist[i].picture!=p.picture?
               a2()
            :
            a1()
             

             

             


          ))
        }
        <div className="imp22"><button onClick={switchvid} className='backk1'></button></div>
        </div>
     </div>
      <div className="downpage2"  >
          <h1 className="watchmore2" >Continue watching...</h1>
        <div className="morevids2">
        

        {
          
          
          playlist1.map((p)=>(
            
            

            
            
           
            <div className="viddiv"><NavLink className="playlist2" exact to={`/Playlistpage/${p._id}` }><img src={p.picture} alt="" className='thumbnail2' height='150px'  /></NavLink></div>
            
             

             


          ))
        }
        
        </div>

     </div>
      <div className="downpage2"  >
          <h1 className="watchmore2" >Recommended...</h1>
        <div className="morevids2">
        {
          
          
          playlist2.map((p)=>(
            
            

            
            
           
            <div className="viddiv"><NavLink className="playlist2" exact to={`/Playlistpage/${p._id}` }><img src={p.picture} alt="" className='thumbnail2' height='150px'  /></NavLink></div>
            
             

             


          ))
        }
        </div>

     </div>
     </div>
      </div>
      </div>);
}


const mapStateToProps = state => {
  return {
    username: state.reducers.username,
    email:state.reducers.email,
    ssss:state.searh.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUsernane: number => dispatch(searchh123(number))

    
  }
}






export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Homepage);