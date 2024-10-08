import axios from 'axios';


const usersUrl = 'http://localhost:8005/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

export const signIn = async (user) => {
   
    return await axios.post(`${usersUrl}/signIn`, user);
}




export const addVideo = async (video) => {
    return await axios.post(`${usersUrl}/addVideo`, video);
}

export const getVideos = async (id) => {
    id = id || '';
    return await axios.post(`${usersUrl}/getVideo`);
}


export const addPlaylist = async (playlist) => {
    return await axios.post(`${usersUrl}/addPlaylist`, playlist);
}


export const getPlaylist = async () => {
  
    return await axios.post(`${usersUrl}/getPlaylist`);
}

export const incrementRating = async (id) => {
    return await axios.put(`${usersUrl}/incrementRating/${id}`)
}

export const decrementRating = async (id) => {
    return await axios.put(`${usersUrl}/decrementRating/${id}`)
}


export const addVideoPlaylist = async (playlist) => {
    return await axios.post(`${usersUrl}/addVideoPlaylist`, playlist);
}


export const getVideoPlaylist = async (id) => {
  
    return await axios.post(`${usersUrl}/getVideoPlaylist`,id);
}

export const addContinue = async (playlist) => {
    return await axios.post(`${usersUrl}/addContinue`, playlist);
}


export const getContinue = async () => {
  
    return await axios.post(`${usersUrl}/getContinue`);
}


export const deleteContinue = async (id) => {
    return await axios.delete(`${usersUrl}/deleteContinue/${id}`);
}





export const addRecommend = async (playlist) => {
    return await axios.post(`${usersUrl}/addRecommend`, playlist);
}


export const getRecommend = async () => {
  
    return await axios.post(`${usersUrl}/getRecommend`);
}


export const deleteRecommend = async (id) => {
    return await axios.delete(`${usersUrl}/deleteRecommend/${id}`);
}




export const addLiked = async (playlist) => {
    return await axios.post(`${usersUrl}/addLiked`, playlist);
}

export const deleteLiked = async (id,id1) => {
    return await axios.delete(`${usersUrl}/deleteLiked/${id}/${id1}`);
}


export const getLiked = async () => {
  
    return await axios.post(`${usersUrl}/getLiked`);
}


export const deletePlaylist = async (id) => {
    return await axios.delete(`${usersUrl}/deletePlaylist/${id}`);
}

export const deleteContinueMany = async (id) => {
    return await axios.delete(`${usersUrl}/deleteContinueMany/${id}`);
}


export const deleteRecommendMany = async (id) => {
    return await axios.delete(`${usersUrl}/deleteRecommendMany/${id}`);
}


export const deleteLikedMany = async (id) => {
    return await axios.delete(`${usersUrl}/deleteLikedMany/${id}`);
}


export const deleteVideoPlaylistMany = async (id) => {
    return await axios.delete(`${usersUrl}/deleteVideoPlaylistMany/${id}`);
}



export const editPlaylist = async (id, user) => {
    return await axios.put(`${usersUrl}/editPlaylist/${id}`, user);
}

export const addSearch = async (user) => {
    
    return await axios.post(`${usersUrl}/addSearch}`,user);
}

export const getSearch = async () => {
    return await axios.post(`${usersUrl}/getSearch}`);
}