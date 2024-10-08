import React, { useState,useEffect } from "react";
import image1 from "./images/vinesh.jpg";
import image2 from "./images/usama.jpg";
import image3 from "./maxresdefault.jpg";
import { editPlaylist, getLiked, getUsers, getVideoPlaylist } from "./api";
import {connect} from 'react-redux'
import { searchh123 } from "./redux/Actions";
import { addPlaylist } from "./api";
import { getVideos } from "./api";
import { getPlaylist } from "./api";
import { incrementRating } from "./api";
import { addLiked } from "./api";
import { decrementRating } from "./api";
import { addVideoPlaylist } from "./api";
import { NavLink,useParams } from "react-router-dom";
import "./Videoplaying.css";
let videolist=[image1,image1,image1,image1,image2,image2,image2];
let flag=0;
let ratee='Rate';
let imp=0,count=12;
let colorrr="White";
let v11=[]
let arr1=[]
let arr2=[]
let id1
const initialValue = {
    
    
    
  email: '',
  picture: '',
  title:'',
  rating:'',
}


const initialValue1 = {
    
    
  playlistId: '',
  videoId: '',

}


const initialValue2 = {
    
    
  playlistId: '',
  videoId: '',

}



const initialValue4 = {
    
    
    
  email: '',
  picture: '',
  title:'',
  rating:'',
}
let templist=[{name:1 ,id:1},{name:"aaaaaaaaaaaaaaaaaaaaaaaaddddfverivonvejnvoervnervnevnevnevnev",id:2},{name:3 ,id:3},{name:4,id:4},{name:5,id:5},{name:6,id:6},{name:7,id:7},{name:8,id:8},{name:9,id:9},{name:10,id:10},{name:11,id:11},{name:12,id:12}];
function Videoplaying(props)
{
  var id  = useParams();

  const [d, setd] = useState();
  const [d1, setd1] = useState();
  var [videos, setV] = useState([]);
  var [play,setPlay]=useState([])
  const [video, setVideos] = useState([]);
  const [img, setimg] = useState();



  useEffect(() => {
    console.log(id)
    getU()
    console.log(props.username)
    console.log(props.email)
    getAllVideos()
   
    getPlaylists()

    
    }, []);

    useEffect(() => {
      console.log(id)
   
      getvi()
     
  
      
      }, d);

      const getU = async () => {
    
      let response = await getUsers()
      for(var i=0;i<response.data.length;i++)
      {
        console.log(response.data[i].email)
        console.log(props.email)
        if(response.data[i].email===props.email)
        {
           id1=response.data[i]._id
           setimg(response.data[i].picture)
        }
      }


      const qwe=await getLiked()
        
        console.log("kumarkumar")
        console.log(qwe)
        var dfg=0
        for(var i=0;i<qwe.data.length;i++)
        {
          if(qwe.data[i].userId/1===id1/1)
          {
            if(qwe.data[i].playlistId/1===id.id1/1)
            {
              console.log("asdaa")
                  dfg=1
            }
          }
        }

        if(dfg===1)
        {
          changerate("Rated");
      changecolor("Green");
          
          
        }
        else{
          changerate("Rate");
      changecolor("White");
     
        }

    }

    const getAllVideos = async () => {
      console.log("hi2")
      var response = await getVideoPlaylist(id);
      //console.log(response.data)
      console.log("hi2")
      for(var i=0;i<response.data.length;i++)
      {
           if(id.id1/1===response.data[i].playlistId/1)
           {

           }
           else
           {
            
             console.log(response.data[i].playlistId)
             
             response.data.splice(i,1)
             i=i-1
           }
      }
      console.log("hi3")
      setVideos(response.data)
      arr1=response.data
      console.log(response.data)
      console.log("hello")
      
      console.log(arr1)
      console.log("hello")
      setd(1)
          
  }



  
  const getvi = async () => {
    var temp=0
    let response1 = await getVideos();
    console.log("hi4")
    console.log(arr1.length)
    console.log("hi5")
    console.log(response1.data.length)
    console.log("hi5")
    for(var i = 0 ;i<response1.data.length;i++)
    {
      temp=0
      for(var j=0;j<arr1.length;j++)
      {
        if(response1.data[i]._id/1===arr1[j].videoId/1)
        {
          temp=1
        }
      }
      if(temp===0)
      {
        console.log(response1.data[i]._id)
        console.log(response1.data[i].link)
        console.log(response1.data[i].title)
        console.log(response1.data[i].picture)
        response1.data.splice(i,1)
        i=i-1
        
      }
    }

    

    console.log(response1.data.length)
    
    
    console.log(response1.data)
    setV(response1.data)
    console.log(videos);
    console.log(response1.data)
    setV(response1.data)
    console.log(videos);
    console.log(response1.data)
    setV(response1.data)
    console.log(videos);
    console.log(response1.data)
    setV(response1.data)
    console.log(videos);
    console.log("h5")
    v11=response1.data
    console.log("h1")
    console.log(v11)

    
    console.log("h5")
    console.log(videos);
    console.log("h1")
    
   setd1(1)
 


  }

  const getPlaylists = async () => {
    let response1 = await getPlaylist();
    console.log("me hi hu")
    console.log(props.email)
    console.log("me hi hu")
    
     for(var i=0;i<response1.data.length;i++)
     {
       if(response1.data[i].email!=props.email)
       {
        response1.data.splice(i,1)
        i=i-1
       }
     }
    arr2=response1.data
    console.log("vinesh")
    console.log(arr2)


  }

  function x1()
  {

  }
    if(typeof(videolist[1])=='undefined')
    {
      videolist.push(image3);
      videolist.push(image3);
      videolist.push(image3);
    }
    else if(typeof(videolist[2])=='undefined')
    {
      videolist.push(image3);
      videolist.push(image3);
    }
    else if(typeof(videolist[3])=='undefined')
    {
      videolist.push(image3);
    }
     const [vid,switchvideos1]=useState(videolist[0]);
     const [vid1,switchvideos2]=useState(videolist[1]);
     const [vid2,switchvideos3]=useState(videolist[2]);
     const [vid3,switchvideos4]=useState(videolist[3]);
     function switchvid()
{ 
          flag+=4;
   if(typeof(videolist[flag])!='undefined' &&typeof(videolist[flag+1])!='undefined' &&typeof(videolist[flag+2])!='undefined' && typeof(videolist[flag+3])!='undefined')
  {
       console.log("done");
         switchvideos1(videolist[flag]);
         switchvideos2(videolist[flag+1]);
         switchvideos3(videolist[flag+2]);
         switchvideos4(videolist[flag+3]);
         
  }
  else if(typeof(videolist[flag])!='undefined' &&typeof(videolist[flag+1])!='undefined' &&typeof(videolist[flag+2])!='undefined' && typeof(videolist[flag+3])=='undefined')
  {
         switchvideos1(videolist[flag]);
         switchvideos2(videolist[flag+1]);
         switchvideos3(videolist[flag+2]);
         switchvideos4(image3);
       
  }
else if(typeof(videolist[flag])!='undefined' &&typeof(videolist[flag+1])!='undefined' &&typeof(videolist[flag+2])=='undefined' && typeof(videolist[flag+3])=='undefined')
  {
         switchvideos1(videolist[flag]);
         switchvideos2(videolist[flag+1]);
         switchvideos3(image3);
         switchvideos4(image3);
       
  }
 else if(typeof(videolist[flag])!='undefined' &&typeof(videolist[flag+1])=='undefined' &&typeof(videolist[flag+2])=='undefined' && typeof(videolist[flag+3])=='undefined')
  {
         switchvideos1(videolist[flag]);
         switchvideos2(image3);
         switchvideos3(image3);
         switchvideos4(image3);
        
  }
  else
  flag-=4;
  console.log(flag);
}
     function switchvidback()
{ 
   if((flag-4)>=0)
  {
       console.log("done");
         switchvideos1(videolist[flag-4]);
         switchvideos2(videolist[flag-3]);
         switchvideos3(videolist[flag-2]);
         switchvideos4(videolist[flag-1]);
               flag-=4;
  }
  console.log(4);
  
}
    let [dis,changedis]=useState("none");
           let [zindexx,changezindex]=useState();
       let [filterr,changefilterr]=useState("none");
         let [zindexx2,changezindex2]=useState(-1);
         let [zindexx3,changezindex3]=useState(-1);
          let [dis1,changedis1]=useState("none");
         let [ratee1,changerate]=useState(ratee);
         let[colorr,changecolor]=useState(colorrr);
         let [val,changeval]=useState("");
         let[templist2,changelist]=useState(templist);
    function onchangee()
    { 
        changefilterr("blur(10px)");
           changezindex(-1); 
       changedis("block");  
         changezindex2(2); 
           

    }
    const onchange = async () => 
    {
      if(ratee1==='Rate')
      {changerate("Rated");
      changecolor("Green");

      initialValue2.userId=id1
      initialValue2.playlistId=id.id1
      const ppp=await addLiked(initialValue2)
      console.log("vineshvinesh")
      console.log(ppp.data)


      await incrementRating(id.id1);
    }
      else
     { changerate("Rate");
     changecolor("White");

     initialValue2.userId=id1
      initialValue2.playlistId=id.id1
      const ppp=await addLiked(initialValue2)
      console.log("vineshvinesh")
      console.log(ppp.data)


     await decrementRating(id.id1);
  }
    }
    function onchange1()
    {
          changedis1("block");  
         changezindex3(3); 
       
    }
    function cancel1()
    {
        changedis1('none');
 changezindex3(-1);
   changeval("");
  //  playlistname="";
    }
    function cancel()
    {
  changedis('none');
 changezindex(0);
 changezindex2(-1);
 changefilterr("none");
    }
    const saveToPlaylist= async (key) => {
       console.log("hellos")
       console.log(key)

       initialValue1.playlistId=key._id
       initialValue1.videoId=id.id

       const qqq=await getVideoPlaylist();
       var tt=0
       console.log("hello122112")
       console.log(qqq)
       console.log("hello122112")
       console.log(qqq.data.length)
       console.log("hello122112")
       for(var i=0;i<qqq.data.length;i++)
       {
          if(qqq.data[i].playlistId/1===key._id/1)
          {
            if(qqq.data[i].videoId/1===id.id/1)
          {
            tt=1
          }
          }
       }
        if(tt===0)
        {
          console.log("hello122112")
          const user2=await addVideoPlaylist(initialValue1);
          console.log("hello122112")


          
        }

        for(var i =0 ;i<arr2.length;i++)
        {
          if(arr2[i]._id/1===key._id/1)
          {
            if(arr2[i].picture===' ')
            {
              for(var j=0;j<videos.length;j++)
              {
                if(videos[j]._id/1===id.id/1)
                {
                     initialValue4.picture=videos[j].picture
                }
              }
              initialValue4.rating=arr2[i].rating
              initialValue4.title=arr2[i].title
              initialValue4.email=arr2[i].email
              console.log(initialValue4)
              const qqq12=await editPlaylist(arr2[i]._id,initialValue4);


            }
          }
        }



       
        
        cancel()
    }
    
   const onclickcreate= async () => {
   
      if(val=='a');
     else
     {
      count++;
     let obj={name:val,id:count};
     initialValue.email=props.email
     initialValue.title=val
     initialValue.rating='0'
     initialValue.picture=' '
     const user2=await addPlaylist(initialValue);

     let response1 = await getPlaylist();
     for(var i=0;i<response1.data.length;i++)
     {
       if(response1.data[i].email!=props.email)
       {
        response1.data.splice(i,1)
        i=i-1
       }
     }
    arr2=response1.data
    console.log("vinesh")
    console.log(arr2)
     console.log(user2)
     
     let arr=templist2.concat(obj);
     changelist(arr);
     cancel1();
     }
   }
    function vall(name)
    {
  changeval(name.target.value);
    }

 
    return(
    <div className="maincontainer">
      <div className="subdiv2" style={ {display:dis},{zIndex: zindexx2}}><h1 className='addd'>Add to playlist</h1>
         <div className="playlists">
           <ul>
         {arr2.map(function f(user)
         {
           return( <button key={user._id} className="printplaylists" onClick={function saveP(){
             saveToPlaylist(user)
           }}>{user.title}</button>);
         })}
         </ul> 
         </div>
        <button className='addplaylist' onClick={onchange1}  >Add playlist +</button>
  <button className='cancelbutt' onClick={cancel}  >Cancel</button>
</div>
 <div className="subdiv3 hmhm3" style={ {display:dis1},{zIndex: zindexx3}}><h1 className="heading1">Create playlist</h1>
 <div className="divv">
   <div className="namediv"> <h1>Name</h1></div>
   <div className="inputdiv"> <input className='playlistinput' type="text" placeholder="Enter a name" value={val} onChange={vall}/></div>
      
        </div>
        <button className='addplaylist'  onClick={onclickcreate}>Create+</button>
         <button className='cancelbutt cancelbutt1' onClick={cancel1}  >Cancel</button>
</div>
      <div className="mainnavbar">
        <NavLink exact to='/Homepage' className="webtitle">
          <span className="titlee"> Virtual Guru </span>
        </NavLink>
        <div className="profilediv">
        <button className="profile"><img src={img} alt="" className="profilepic" height='50px'  />
        <div className="subdiv"><ul><li>View Profile</li> <li> <NavLink exact to='/' className="logoutb">Logout   </NavLink></li></ul></div></button>
        </div>
      </div>
        <div className="videoback" style={{zIndex:zindexx},{filter:filterr}}>
        <div className="container_of_video">
          {
        videos.map((p)=>(
             id.id==p._id?
            <iframe className='mainvidd'width="560" height="315" src={p.link} frameBorder="0" allow="accelerometer;   " allowFullScreen></iframe> 
            :
            x1()
        ))
}
        </div>
 
        <div className="titleandrate">
        {
        videos.map((p)=>(
             id.id==p._id?
             <h1 className="title" >{p.title}</h1>

             :
            x1()
        ))
}
        <div className="buttonsimp">
        <button className="the" onClick={onchange}  style={{color:colorr}}>{ratee1}</button>
        <button className="the1"  onClick={onchangee}>Add to playlist</button>
        </div>     
        </div></div>
        
        <div className="downpage"  style={{filter:filterr}}>
          <h1 className="watchmore" >Watch more from this playlist now:</h1>
        <div className="morevids">
        <div className="imp1"><button onClick={switchvidback} className='backk' ></button></ div >
        {
        videos.map((p)=>(
             id.id!=p._id?
             <div className="viddiv"><NavLink className="playlist" exact to={`/Videoplaying/${p._id}/${id.id1}`} ><img src={p.picture} alt="" className='thumbnail' height='200px'  /></NavLink></div>
             :
            x1()
        ))
}
        <div className="imp2"><button onClick={switchvid} className='backk1'></button></div>
        </div>

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
)(
Videoplaying);
