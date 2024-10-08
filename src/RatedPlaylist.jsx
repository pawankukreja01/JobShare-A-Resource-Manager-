import  { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import './view_your_playlist.css';
import image1 from "./images/vinesh.jpg";
import { searchh123 } from "./redux/Actions";
import {connect} from 'react-redux'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { deleteLiked, getLiked, getPlaylist, getUsers } from "./api";

let templist=[{ratetype:'Rate'}
            ,{rating:12}
            ,{totalvids:5}
            ,{name:1 ,id:1}
            ,{name:"aaaaaaaaaaaaaaaaaaaaaaaaddddfverivonvejnvoervnervnevnevnevnev",id:2}
            ,{name:3 ,id:3}
            ,{name:4,id:4}
            ,{name:5,id:5}
            ,{name:6,id:6}
            ,{name:7,id:7}
            ,{name:8,id:8}
            ,{name:9,id:9}
            ,{name:10,id:10}
            ,{name:11,id:11}
            ,{name:12,id:12}
        ];

let id1
let colorrr="White";
let objectToBeDeleted=0;
function RatedPlaylist(props)
{
    const [playlist, setPlaylist] = useState([]);
  const [open, setOpen] = useState(false)
  const [img, setimg] = useState();

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    getAllPlaylist()
    }, []);


    const getAllPlaylist = async () => {
        console.log("shawa")

        let response = await getLiked();

        console.log(response.data)

        let response1=await getUsers()

        console.log(response1.data)

        console.log(props.email)

        let response2 =await getPlaylist()

        console.log(response2)

        for(var i =0;i<response1.data.length;i++)
        {
            if(response1.data[i].email===props.email)
            {
                id1=response1.data[i]._id
                setimg(response1.data[i].picture)
                console.log(id1)
                console.log()
            }
        }

        console.log(id1)

        for(var i =0;i<response2.data.length;i++)
        {
            var temp=0

            for(var j=0;j<response.data.length;j++)
            {
                if(response.data[j].userId/1===id1/1)
                {
                    if(response2.data[i]._id/1===response.data[j].playlistId/1)
                    {
                        temp=1
                    }
                }
            }

            if(temp===0)
            {
                response2.data.splice(i,1)
                i=i-1
            }
        }

        console.log(response2.data)
        setPlaylist(response2.data)

    }

  const setting=(index)=>
  {
      console.log("assa")
    console.log(index)
    objectToBeDeleted=index
    setOpen(true)
  }
    function onchange()
    {
      if(ratee1==='Rate')
      {changerate("Rated");
      templist[0].ratetype='Rated';
      changerate2(ratee2+1);
      templist[1].rating+=1;
      changecolor("Green");
    }
      else
     { changerate("Rate");
     templist[0].ratetype='Rate';
     changerate2(ratee2-1);
      templist[1].rating-=1;
     changecolor("White");
  }
    }
    let [ratee1,changerate]=useState(templist[0].ratetype);
    let [ratee2,changerate2]=useState(templist[0].rating);
    let[colorr,changecolor]=useState(colorrr);
    // let[templist2,changelist]=useState(templist);

    const deletePlaylist=async (user) =>{
      console.log(user)
      templist.splice(objectToBeDeleted,1)

      const ppp=await deleteLiked(id1,user)
      getAllPlaylist()
      console.log("vineshvinesh")
      console.log(ppp.data)
    }
  

    return ( <div className="maincontainer1">
        <div className="mainnavbarr1">

        <div className="searchbardiv1">
              
              </div>
              <div className="searchbardiv1">
                
              </div>
        <NavLink exact to='/Homepage' className="webtitlee1">
          <span className="titleee1"> Virtual Guru </span>
        </NavLink>
        
        <div className="profiledivv1">
        <button className="profilee1" ><img src={img} alt="" className="profilepicc1" height='50px'  /> 
        <div className="subdivv1"><ul><li>View Profile</li> <li> <NavLink exact to='/' className="logoutb" >Logout   </NavLink></li></ul></div>  </button> </div>
      </div>
      <div className="innerdiv10" >
      {/* <div className="yaya"><img src={image1} height='300px' width='300px' className='yayaimg'></img></div> */}
      <div className='yaya1'>
          <h1 className="yo_usama">.....Rated Playlist.....</h1>
          <div className="indiv_usama">
          <h1 className="yo1_usama">Total Playlist: {playlist.length}</h1>
        
          {/* <button className="ha1" onClick={onchange}  style={{color:colorr}}>{ratee1}</button> */}
          </div>
          {/* <h1 className="yo1">  Rating: {templist[1].rating}</h1> */}
      </div></div>
      <div className="innerdiv11">
        <ul>
         {playlist.map(function f(user,index)
         {
           return( <button key={user._id} className="printplaylists22"><div className="middlediv2"><NavLink  exact to={`/playlistpage/${user._id}`}  className='com1_usama'><div className="flexing"><div className='playlistimagediv'> <img className='playlistimage' src={user.picture} height='160px'/></div> <div className="listnaming">{user.title}</div></div></NavLink><Button  onClick={() => {setting(index)}}><MoreVertIcon className="removing_playlist_option"/></Button>
           <Dialog onClose={handleClose} open={open}>
        <List>
          <ListItem autoFocus button onClick={()=>
          {
            deletePlaylist(user._id);
            handleClose();
          }}>
            Remove
          </ListItem>
        </List>
      </Dialog></div></button>);
         })}
         </ul> 
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
  )(RatedPlaylist);