import React, { useState,useEffect } from "react";
import './EditProfile.css'
import { saveUsernane1 } from "./redux/Actions";
import {connect} from 'react-redux'
import EditIcon from '@material-ui/icons/Edit'
import { editPlaylist, editUser, getPlaylist, getUsers } from "./api";

const sampleData = {
  username: "",
  email: "",
  password: "",
  phone: "",
  picture:""
}

const sData = {
  backgroundImage: "",



}

var id1

function EditProfilee(props){
  const [editPermission, updatePermission] = useState("EDIT");
  const cursorDefault = { cursor: 'default' }
  const initialPointerEvent = { 'pointer-events': 'none' }
  const finalPointerEvent = { cursor: 'text' }
  const cursorNotAllowedObj = { cursor: 'not-drop' }
  const wrapper = { cursor: 'not-allowed' }
  const cursorPointer = { cursor: "Pointer" }
  const [wrapperCursor, updateWrapperCursor] = useState(wrapper);
  const [pointerEvent, updatePointerEvents] = useState(initialPointerEvent)
  const [, updateCursorNotAllowed] = useState(cursorNotAllowedObj);
  let [isOpen, setIsOpen] = useState(false);
  const [wrapperProfile, updateWrapperProfile] = useState(wrapper)

  const [profilePictureUseState, updateProfilePictureUseState] = useState()

  const [initialFormValue, updateFormValue] = useState({
    ...sampleData
  })



  useEffect(() => {
    console.log("vineshvineshvinesh")
    console.log(props.email)

    getAllUsers()
    }, []);


    const getAllUsers = async () => {

      let response = await getUsers()

      for(var i=0;i<response.data.length;i++)
      {
        if(props.email===response.data[i].email)
        {
          var a=response.data[i].picture
          sData.backgroundImage=a
          console.log(response.data[i])
          updateProfilePictureUseState(response.data[i].picture)
          sampleData.picture=response.data[i].picture
          sampleData.username=response.data[i].username
          sampleData.password=response.data[i].password
          sampleData.phone=response.data[i].phone
          sampleData.email=response.data[i].email
          id1=response.data[i]._id
          updateFormValue(sampleData)
          console.log("kumarkumarkumar")
          console.log(profilePictureUseState)
          

               }
      }
      console.log("hiiiiii")
      console.log(response.data)
    
  }



  const initialStylesheet = {
    opacity: '70%'
  }
  const finalStylesheet = {
    opacity: '100%'
  }
  const initialStylesheetForBackground =
  {
    opacity: '78%'
  }
  const finalStylesheetForBackground = {
    opacity: '93%'
  }
  let [deleteBackgroundUseState, updateDeleteBackgroundUseState] = useState({ "background-color": "none" })

  const DeleteBackgroundClicked = () => {
    updateProfilePictureUseState({
      backgroundImage: "none",
      backgroundColor: "black"
    })

    sampleData.picture='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDw8PDQ0NDQ0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKy0tLS0rKystNzctKystLTctNy0rLSstLSstKysrNys3LSstKystLSstLSs3Ny0tK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDERFAQAVAAAAAAKKCKggoAoioqCooACCoAKIooCKAAgAACggIAKgAKCAoIAAqCCgAAKoAggoICCigIoAAAqAAAAKAgiKigKAJioCgCooAgqCKAgACgAAAIKgiiKoAIAAACgCoACiAAgoCKgCgCoqKgIqAAAoigAAKgCoAIAqACCoAKIqgAACoqAAAAgoqICiiAgAACoAACiKAAAAAigIKggKAAAigoaoCoAgAKAAIAIoioqAAAKACAAIKgKoAAigAAAAAAAKgAgACgAAACKAgAAAAAgAKACACgAiqAAAAAAAAAAKAgCoAIoAAABUUUQBEAAAAAAAFABBRAVQAAAAAAAUQAAUAAFQQAFABBBUEAAAFAAAAAAAAFEVFAAAAAAAAAUEFARUAAFAABFRAAVAAABAAAAAAUFQQUAAAVUABUUEVBRUUQQAAAAAEAVAAABAAUAEAAAUBBUUUBFAAFRQRQAQFQAFABAAAQAAAAAAAAAAQFAABVAEABUFRUUAAVFBAFEKAAAhSABEABQBFUFc0AQigAAgEAAUFKgARQBFBQFEEigK//2Q=='
    updateFormValue(sampleData)
    updateDeleteBackgroundUseState({ "background-color": "black" })
  }

  const [opacityStyleSheetForm, updateOpacityStyleSheetForm] = useState(initialStylesheet);
  const [opacityStyleSheetbackground, updateOpacityStyleSheetbackground] = useState(finalStylesheet);

 
  console.log(profilePictureUseState)
  const UploadDeleteEnable = {
    display: "block"
  }

  const UploadDeleteDisable = {
    display: "none"
  }
  const [availabilityOfUploadProfileApppearance, updateAvailabilityOfUploadProfileApppearance] = useState(UploadDeleteDisable);


  const changeOccur = (props) => {

    console.log(initialFormValue)
    updateFormValue((oldValue) => {
      return (
        {
          ...oldValue,
          [props.target.name]: props.target.value
        }
      );
    })

  }

  const profilePicClicked = () => {
   console.log("hello")
    console.log(initialFormValue)
    if (editPermission === "SAVE CHANGES") {
      if (!isOpen) {
        updateAvailabilityOfUploadProfileApppearance(UploadDeleteEnable);
      }
      else if (isOpen) {
        updateAvailabilityOfUploadProfileApppearance(UploadDeleteDisable)
      }
      setIsOpen(!isOpen)
    }
  }

  const changingStateToFalse = () => {
    if (isOpen) {
      updateAvailabilityOfUploadProfileApppearance(UploadDeleteDisable);
      setIsOpen(!isOpen)
    }
  }

  const buttonClicked  = async() => {
    if (editPermission === 'EDIT') {
      updateWrapperProfile(cursorPointer)
      updateCursorNotAllowed(finalPointerEvent)
      updatePointerEvents(finalPointerEvent)
      updateOpacityStyleSheetForm(finalStylesheet)
      updateOpacityStyleSheetbackground(initialStylesheetForBackground)
      updatePermission('SAVE CHANGES')
      updateWrapperCursor(cursorDefault)
    }
    else if (editPermission === 'SAVE CHANGES') {

      console.log("hello12")
      console.log(initialFormValue)

      var user2=await editUser(id1,initialFormValue)

      //console.log(user2.data)

      const initialValue111 = {
    
    
    
        email1: '',
        username: '',
      
       
      }

      initialValue111.email1=initialFormValue.email
      initialValue111.username=initialFormValue.username


      if(user2.data==="yes")
      {
              const x=props.email
              console.log("hello")
              console.log(x)
              console.log("hello")

              props.saveUsernane(initialValue111)
              console.log("jaijai")
              console.log(x)
              console.log(props.email)

              if(x===initialValue111.email1)
              {
                   console.log("gandu1")
                   console.log(x)
                   console.log(props.email)
              }
              else
              {
                console.log("gandu")
                user2= await getPlaylist()
                console.log(user2.data)

                for(var i=0;i<user2.data.length;i++)
                {
                  if(user2.data[i].email===x)
                  {

                  }
                  else
                  {
                    user2.data.splice(i,1)
                    i=i-1
                  }
                }

                console.log(user2.data)

                for(var i=0;i<user2.data.length;i++)
                {
                  user2.data[i].email=initialValue111.email1
                  var dddd=await editPlaylist(user2.data[i]._id,user2.data[i])
                }

                console.log(user2.data)
              }
              console.log(initialValue111)
      }

      updateWrapperProfile(wrapper)
      updateWrapperCursor(wrapper)
      updatePermission('EDIT')
      updateCursorNotAllowed(cursorNotAllowedObj)
      updatePointerEvents(initialPointerEvent)
      updateOpacityStyleSheetForm(initialStylesheet)
      updateOpacityStyleSheetbackground(finalStylesheetForBackground)
    }
  }
  let profilePicture = {
    backgroundImage: ''
  }
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        profilePicture.backgroundImage = reader.result
        updateProfilePictureUseState(profilePicture.backgroundImage)
        sampleData.picture=profilePicture.backgroundImage

        updateFormValue(sampleData)
     
     
        console.log(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <>
      <div className="background" style={opacityStyleSheetbackground} onClick={changingStateToFalse} ></div>
      <div className="signupSection" onClick={changingStateToFalse} >
        <form name="signupform">
          <div style={opacityStyleSheetForm}>
            <div style={wrapperCursor}>
              <div className="signupForm" onClick={changingStateToFalse}>
              
              <img className="profile_pic" style={wrapperProfile, deleteBackgroundUseState} onClick={profilePicClicked} src={initialFormValue.picture}></img>
                 <div onClick={profilePicClicked} className="edit_icon">
                   
                    <EditIcon />
                    <div className="UploadDeleteDisable" style={availabilityOfUploadProfileApppearance}>
                      <input type="file" onChange={(e) => imageHandler(e)} id="files" accept="image/*" title="upload" />
                      <label for="files" className="pop_up_profile"> Upload a Photo</label>
                      <div className="pop_up_profile" onClick={DeleteBackgroundClicked} >Delete Photo </div>
                    </div>
                  </div>
                 
                
                <ul className="noBullet"  >
                  <li>
                    <label for="username" className="tags"> User Name: </label>
                    <input type="text" style={pointerEvent} onChange={changeOccur} className="inputFields user_name" name="username" value={initialFormValue.username} />
                  </li>

                  <li>
                    <label for="number" className="tags"  >P-Number:</label>
                    <input type="number" style={pointerEvent} className="inputFields number" onChange={changeOccur} name="phone" value={initialFormValue.phone} />
                  </li>

                  <li>
                    <label for="password" className="tags">Password:</label>
                    <input type="password" style={pointerEvent} className="inputFields password" onChange={changeOccur} name="password" value={initialFormValue.password} />
                  </li>

                  <li>
                    <label for="email" className="tags">Email: </label>
                    <input type="email" style={pointerEvent} className="inputFields email" onChange={changeOccur} value={initialFormValue.email} name="email" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="center-btn">
            <input type="button" onClick={buttonClicked} id="join-btn" name="join" alt="Join" value={editPermission} />
          </div>
        </form>
      </div>
    </>
  );
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
    saveUsernane: number => dispatch(saveUsernane1(number))

    
  }
}






export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfilee);
