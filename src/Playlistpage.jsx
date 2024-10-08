import  { useState,useEffect } from "react";
import { NavLink,useParams } from "react-router-dom";
import { addContinue, getVideoPlaylist } from "./api";
import { getPlaylist } from "./api";
import { incrementRating } from "./api";
import {connect} from 'react-redux'
import { searchh123 } from "./redux/Actions";
import { decrementRating } from "./api";
import { deleteContinue } from "./api";
import { addLiked } from "./api";
import { getLiked } from "./api";
import { getUsers } from "./api";

import { deleteLiked } from "./api";
import { getVideos } from "./api";
import './Playlistpage.css';
import image1 from "./images/vinesh.jpg";

let templist=[{ratetype:'Rate'},{rating:12},{totalvids:5},{name:1 ,id:1},{name:"aaaaaaaaaaaaaaaaaaaaaaaaddddfverivonvejnvoervnervnevnevnevnev",id:2},{name:3 ,id:3},{name:4,id:4},{name:5,id:5},{name:6,id:6},{name:7,id:7},{name:8,id:8},{name:9,id:9},{name:10,id:10},{name:11,id:11},{name:12,id:12}];
let arr=[]
var id1
const initialValue = {
    
  userId: '',
  playlistId: '',
  

}
let searchh;

let searchhh='';


let colorrr="White";
let arr2=[]
function Playlistpage(props)
{


  
  
  
  var id  = useParams();
  const [d, setd] = useState();
  const [d1, setd1] = useState();
  var [videos, setV] = useState([]);
  const [video, setVideos] = useState([]);
  var [play,setPlay]=useState([])
  const [img, setimg] = useState();


  var v11=[]

  useEffect(() => {
    
    getAllVideos()
    getUse()
    

    


    
   // getvi()
    
    }, []);





        const getUse =async ()=>{

         
         

       //searchhh='';
          
          let response = await getUsers()
          for(var i=0;i<response.data.length;i++)
          {
            if(response.data[i].email===props.email)
            {
               id1=response.data[i]._id
               //setimg(response.data[i].picture)
            }
          }
          console.log("yes yes yes")
    

          initialValue.userId=id1
          initialValue.playlistId=id.id
         
          var user2=await addContinue(initialValue)
          console.log("AS")
     
          console.log("AS")
          if(user2.data==="saved")
        {

        }
        else if(user2.data==="cant")
        {

        }
        else
        {
            console.log("hello")
             user2=await deleteContinue(user2.data);
             user2=await addContinue(initialValue);
        }

        const qwe=await getLiked()
        
        console.log("kumarkumar")
      
        var dfg=0
        for(var i=0;i<qwe.data.length;i++)
        {
          if(qwe.data[i].userId/1===id1/1)
          {
            if(qwe.data[i].playlistId/1===id.id/1)
            {
             
                  dfg=1
            }
          }
        }

        if(dfg===1)
        {
          changerate("Rated");
          templist[0].ratetype='Rated';
          
          changerate2(ratee2+1);
          templist[1].rating+=1;
        }
        else{
          changerate("Rate");
      templist[0].ratetype='Rate';
      
      changerate2(ratee2-1);
      templist[1].rating-=1;
        }

          
        }


    const getplaylis = async () => {
     
      

      
      

      console.log("jiani2")
    }    

    const getvi = async () => {
      
 
    }
    const getAllVideos = async () => {


      
      console.log("hi2")
      let response = await getVideoPlaylist(id);

      console.log("hi2")
      for(var i=0;i<response.data.length;i++)
      {
           if(id.id/1===response.data[i].playlistId/1)
           {

           }
           else
           {
            
            
             
             response.data.splice(i,1)
             i=i-1
           }
      }
      
       setVideos(response.data)

       arr2=response.data


       console.log("ritesg")
     


      var temp=0
      let response1 = await getVideos();
      console.log("hi4")
    
      console.log("hi5")
      console.log(response1.data.length)
      console.log("hi5")
      for(var i = 0 ;i<response1.data.length;i++)
      {
        temp=0
        for(var j=0;j<arr2.length;j++)
        {
          if(response1.data[i]._id==arr2[j].videoId)
          {
            temp=1
          }
        }
        if(temp===0)
        {
          
          response1.data.splice(i,1)
          i=i-1
          
        }
      }

      console.log(response1.data.length)
      
      
      
      setV(response1.data)
   
      v11=response1.data


      console.log("jiani")
      let response2 = await getPlaylist();
      console.log("jiani1")
    
      console.log("jiani1")

      for(var i=0;i<response2.data.length;i++)
      {
       
        if(id.id/1===response2.data[i]._id/1)
        {
          console.log("hello")
          setPlay(response2.data[i])
          

         
        }
    

      
 
   
          
  }
}
    const onchange = async () => {
    
      if(ratee1==='Rate')
      {changerate("Rated");
      templist[0].ratetype='Rated';
      
      changerate2(ratee2+1);
      templist[1].rating+=1;
      

      

      
         
      initialValue.userId=id1
      initialValue.playlistId=id.id
      const ppp=await addLiked(initialValue)
      console.log("vineshvinesh")
   
      const ppp12=await incrementRating(id.id);

      console.log(ppp12)

     
      changecolor("Green");

      arr=play
      console.log("arr=")

      arr.rating=arr.rating/1+1
      console.log("arr=")
   
      setPlay(arr)
      console.log("play=")
    
    
      
      
      }
      else
     { changerate("Rate");
     templist[0].ratetype='Rate';
     changerate2(ratee2-1);
      templist[1].rating-=1;

      const ppp=await deleteLiked(id1,id.id)
      console.log("vineshvinesh")
  
      let poiu=await decrementRating(id.id);

      console.log(poiu)

      arr=play
      console.log("arr=")
      arr.rating=arr.rating/1-1
      console.log("arr=")
      setPlay(arr)
      console.log("play=")
     
       
     
      
     changecolor("White");
  }
    }
    let [ratee1,changerate]=useState(templist[0].ratetype);
    let [ratee2,changerate2]=useState(templist[0].rating);
    let[colorr,changecolor]=useState(colorrr);

    const onValueChange = (e) => {
      console.log(e.target.value)
 
      searchh=e.target.value
      
      props.saveUsernane(searchh)
    
      
      
    }
    // let[templist2,changelist]=useState(templist);


  

    return ( <div className="maincontainer1">
        <div className="mainnavbarr1">
        <div className="searchbardiv1">

        
</div>
<div className="searchbardiv1">


</div>
<div className="searchbardiv1">


</div>
<div className="searchbardiv1">


</div>
<div className="searchbardiv1">

        
        </div>
       
        
        
        
        
          
        <NavLink exact to='/Homepage' className="webtitlee1">
          <span className="titleee1"> Virtual Guru </span>
        </NavLink>
        <div className="searchbardiv1">

        
        </div>
        <div className="searchbardiv1">

        
        </div>
        <div className="searchbardiv1">

        
        </div>
        <div className="searchbardiv1">

        
        </div>
      </div>
      <div className="innerdiv10" >
      <div className="yaya"><img src={play.picture} height='300px' width='300px' className='yayaimg'></img></div>
      <div className='yaya1'>
          <h1 className="yo">...........{play.title}...........</h1>
          <div className="indiv">
          <h1 className="yo1">Total Videos: {videos.length}</h1>
        
          <button className="ha1" onClick={onchange}  style={{color:colorr}}>{ratee1}</button></div>
          <h1 className="yo1">  Rating: {play.rating}</h1>
      </div></div>
      <div className="innerdiv11">
      <h1 className="yo3">Videos</h1>
              <ul>
         {videos.map(function f(v)
         {
           return(<NavLink  exact to={`/Videoplaying/${v._id}/${id.id}`}  className='com1'> <button key={v._id} className="printplaylists22"><div className="middlediv2"><div className='playlistimagediv'> <img className='playlistimage' src={v.picture} height='160px'/></div>  <div className="listname">{v.title}</div></div> </button> </NavLink>);
         })}
         </ul> 
          </div>
 
      </div>);
}



const mapStateToProps = state => {
  return {
    username: state.reducers.username,
    email:state.reducers.email
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
)(Playlistpage)