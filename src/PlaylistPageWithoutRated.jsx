import { useState,useEffect, version } from "react";
import { NavLink,useParams } from "react-router-dom";
import { addContinue, addVideo, addVideoPlaylist, editPlaylist, getVideoPlaylist } from "./api";
import { getPlaylist } from "./api";
import { incrementRating } from "./api";
import {connect} from 'react-redux'
import { saveUsernane1 } from "./redux/Actions";
import { decrementRating } from "./api";
import { deleteContinue } from "./api";
import { addLiked } from "./api";
import { getLiked } from "./api";
import { getUsers } from "./api";

import { deleteLiked } from "./api";
import { getVideos } from "./api";
import './Playlistpage.css';
import image1 from "./images/vinesh.jpg";

let templist = [{ ratetype: 'Rate' }, { rating: 12 }, { totalvids: 5 }, { name: 1, id: 1 }, { name: "aaaaaaaaaaaaaaaaaaaaaaaaddddfverivonvejnvoervnervnevnevnevnev", id: 2 }, { name: 3, id: 3 }, { name: 4, id: 4 }, { name: 5, id: 5 }, { name: 6, id: 6 }, { name: 7, id: 7 }, { name: 8, id: 8 }, { name: 9, id: 9 }, { name: 10, id: 10 }, { name: 11, id: 11 }, { name: 12, id: 12 }];
let arr2=[]

let colorrr = "White";


let arr=[]
var id1
const initialValue = {
    
  userId: '',
  playlistId: '',
  

}

const sampleData = {
    
  link: '',
  title: '',
  picture: ''
  

}
const initialValue4 = {
    
    
    
  email: '',
  picture: '',
  title:'',
  rating:'',
}

function Playlistpage(props) {

  const [initialFormValuePlaylistPage, updateInitialFormValuePlaylistPage] = useState(sampleData)
  
  const [img, setimg] = useState();

  const [video, setVideos] = useState([]);

  
  
  
  var id  = useParams();
  const [d, setd] = useState();
  const [d1, setd1] = useState();
  var [videos, setV] = useState([]);
  var [play,setPlay]=useState([])
  var [po,setPo]=useState();

  var v11=[]

  useEffect(() => {
    console.log("lkljkl")
    console.log(id)
    getUse()
    console.log(id)
    console.log("hi")
    getAllVideos()


    
   // getvi()
    
    }, []);

    useEffect(() => {
      console.log("hi")
      
      console.log(id)
      console.log("hi")
      //getAllVideos()
      getvi()
      
      }, d);


      useEffect(() => {
        console.log("vinesh")
        
        console.log(id)
        console.log("kumar")
        //getAllVideos()
        getplaylis()


        
        
        
        }, d1);



        const getUse =async ()=>{
          
          let response = await getUsers()


          const initialValue111 = {
    
    
    
            email1: '',
            username: '',
          
           
          }
          for(var i=0;i<response.data.length;i++)
          {
            console.log(response.data[i].email)
            console.log(props.email)
            if(response.data[i]._id/1===id.id1/1)
            {
               id1=response.data[i]._id
               initialValue111.email1=response.data[i].email
               initialValue111.username=response.data[i].username
               props.saveUsernane(initialValue111)
               setimg(response.data[i].picture)
            }
          }
          console.log("yes yes yes")
          console.log(id1)

          initialValue.userId=id1
          initialValue.playlistId=id.id
         
          var user2=await addContinue(initialValue)
          console.log("AS")
          console.log(user2.data)
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
        console.log(qwe)
        var dfg=0
        for(var i=0;i<qwe.data.length;i++)
        {
          if(qwe.data[i].userId/1===id1/1)
          {
            if(qwe.data[i].playlistId/1===id.id/1)
            {
              console.log("asdaa")
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
      console.log("jiani")
      let response1 = await getPlaylist();
      console.log("jiani1")
      console.log(response1.data)
      console.log("jiani1")

      for(var i=0;i<response1.data.length;i++)
      {
        console.log(id.id/1)
        console.log(response1.data[i]._id/1)
        if(id.id/1===response1.data[i]._id/1)
        {
          console.log("hello")
          setPlay(response1.data[i])
          

         
        }
      }

      
      
      console.log(play)
     
      console.log("jiani2")
    }    

    const getvi = async () => {
      var temp=0
      let response1 = await getVideos();
      console.log("hi4")
      console.log(arr2.length)
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
    const getAllVideos = async () => {
      console.log("hi2")
      let response = await getVideoPlaylist(id);
      console.log(response.data)
      console.log("hi2")
      for(var i=0;i<response.data.length;i++)
      {
           if(id.id/1===response.data[i].playlistId/1)
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
      arr2=response.data
      setd(1)
          
  }

  const [displayBlocking, updateDisplayBlocking] = useState({ display: "none", opacity: '100%' })
  const [opacityChanger, updateOpacityChanger] = useState({ opacity: '100%' })
  const [PointerEventsPlaylist, updatePointerEventsPlaylist] = useState({ 'pointer-events': 'default' })

  const [uploadAPhoto, updateUploadAPhoto] = useState(" Upload a Photo")
  const [uploadAPhotoColor, updateUploadAPhotoColor] = useState({ color: 'red' })

  const arrOfAddedVideo = []
  let resulting;
  
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        resulting = reader.result
        console.log(initialFormValuePlaylistPage)
        sampleData.picture=resulting
        sampleData.link=initialFormValuePlaylistPage.link
        sampleData.title=initialFormValuePlaylistPage.title
        console.log("vien")
        console.log(sampleData)
        updateInitialFormValuePlaylistPage(sampleData)
      
        updateUploadAPhoto("Uploaded")
        updateUploadAPhotoColor({ color: 'green' })
        console.log(resulting)
        // profilePicture.backgroundImage=reader.result
        // updateProfilePictureUseState({backgroundImage: `url(${profilePicture.backgroundImage})`})
      }
    }

    // profilePicture.backgroundImage=backgroundImage2;
    reader.readAsDataURL(e.target.files[0]);
  }

  const makingValueDefault = () => {
    updateDisplayBlocking({ display: "none", opacity: '100%' })
    arrOfAddedVideo.push(initialFormValuePlaylistPage)
    updateOpacityChanger({ opacity: '100%' })
    updatePointerEventsPlaylist({ 'cursor': 'default' })
    
  }

  const submitHandler = async(event) => {
      console.log(initialFormValuePlaylistPage)
      console.log("poiuytrewq")
      
 if(play.picture===' ')
 {console.log("h1")

 console.log(play)

   initialValue4.picture=sampleData.picture
   initialValue4.rating=play.rating
         initialValue4.title=play.title
         initialValue4.email=play.email
         console.log("h111")
         console.log(initialValue4)

         console.log("h111")
         console.log(play)
         console.log("h111")
         const qqq12=await editPlaylist(play._id,initialValue4);
 }
      checkkk()
      
      //const add1=await addVideo(initialFormValuePlaylistPage)
      //console.log(add1.data)
    event.preventDefault();
    updateDisplayBlocking({ display: "none", opacity: '100%' })
    arrOfAddedVideo.push(initialFormValuePlaylistPage)
    updateOpacityChanger({ opacity: '100%' })
    updatePointerEventsPlaylist({ 'cursor': 'default' })
    sampleData.link=''
    sampleData.title=''
    sampleData.picture=''
    updateInitialFormValuePlaylistPage(sampleData)
    console.log(initialFormValuePlaylistPage)

  }

  const checkkk = async() =>
  {
    console.log(initialFormValuePlaylistPage)
    console.log("hellohello")

     
    
    //console.log(initialFormValuePlaylistPage.picture)
 var add1=await addVideo(initialFormValuePlaylistPage)
 console.log(sampleData)


      console.log(add1.data)

      const sampleData1 = {
    
        videoId: '',
        playlistId: '',
     
        
      
      }

      sampleData1.videoId=add1.data._id
      sampleData1.playlistId=id.id
      


      add1=await addVideoPlaylist(sampleData1)
      console.log(add1.data)





      window.location.reload(false);
      



  }

  const changeOccured = (props) => {
    console.log(initialFormValuePlaylistPage)
    updateInitialFormValuePlaylistPage((oldValue) => {

      return (
        {
          ...oldValue,
          [props.target.name]: props.target.value
        }
      );
    })

  }

  function onchange() {
    updateUploadAPhoto("Upload A Photo")
    updateUploadAPhotoColor({ color: 'red' })

    updateDisplayBlocking({ display: "block", opacity: '100%' })

    updateOpacityChanger({
      filter: 'blur(5px)',
      '-webkit-filter': 'blur(5px)'
    })

    updatePointerEventsPlaylist({ 'pointer-events': 'none' })
  }
  let [ratee1, changerate] = useState(templist[0].ratetype);
  let [ratee2, changerate2] = useState(templist[0].rating);
  let [colorr, changecolor] = useState(colorrr);
  // let[templist2,changelist]=useState(templist);




  return (
    <>
      <div style={displayBlocking} className="center_div">
        <div className="header_add_video centered">
          <h1>ADD VIDEO</h1>
          <form onSubmit={submitHandler}>
            <ul className="noBullet">
              <li>
                <label for="URL" className="tags">URL: </label>
                <input type="text" onChange={changeOccured} className="inputFields URL" name="link" value={initialFormValuePlaylistPage.link} />
              </li>
              <li>
                <label for="title" className="tags">Title: </label>
                <input type="text" onChange={changeOccured} className="inputFields title1" name="title" value={initialFormValuePlaylistPage.title} />
              </li>
              <li>
                <label for="thumbNail" className="tags">Thumb-nail: </label>
                <input type="file" onChange={(e) => imageHandler(e)} id="files" accept="image/*" title="upload" />
                <label for="files" className="uploading" style={uploadAPhotoColor}> {uploadAPhoto} </label>
              </li>
            </ul>
            <div className="lower_div">
              <input type="submit" className="submit"></input>
              <button className="cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div style={PointerEventsPlaylist} >
        <div style={opacityChanger} className="maincontainer1">
          <div className="mainnavbarr1">
          <div className="searchbardiv1">
              
              </div>
              <div className="searchbardiv1">
                
              </div>
             
              
            <NavLink exact to='/Homepage' className="webtitlee1">
              <span className="titleee1"> Virtual Guru </span>
            </NavLink>
            
            <div className="profiledivv1">
              <button className="profilee1" ><img src={img} alt="" className="profilepicc1" height='50px' />
                <div className="subdivv1"><ul><li>View Profile</li> <li> <NavLink exact to='/' className="logoutb" >Logout   </NavLink></li></ul></div> </button> </div>
          </div>
          <div className="innerdiv10" >
            <div className="yaya"><img src={play.picture} height='300px' width='300px' className='yayaimg'></img></div>
            <div className='yaya1'>
              <h1 className="yo">.........{play.title}.............</h1>
              <div className="indiv">
                <h1 className="yo1">Total Videos: {videos.length}</h1>

                <button className="ha1" onClick={onchange} style={{ color: colorr }}>Add Video</button></div>
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
        </div>
      </div>
    </>);
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
  )(Playlistpage);