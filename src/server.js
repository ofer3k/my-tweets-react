import axios from 'axios'
const serverAPI=process.env.REACT_APP_CLIENT_SERVER
console.log(serverAPI,'serverAPI')
const signInUser =async (user)=> {
console.log(user)
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/signIn/`,user);
return(response.data)
    } catch (error) {
  return(error)  
  }
  }
  
  const findUser = async(id)=>{
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/readUser/`,{_id:id});
      return(response.data)
      
    } catch (error) {
      return(error)
    }
  }
  const getPostsByFollowing= async(listOfUsers,limit)=>{
    console.log(listOfUsers,'listOfUsers')
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/getPostsByFollowing/`,{list:listOfUsers});
      return(response.data)
    } catch (error) {
      return(error)
    }
  }

  const getAllUsersForSearch= async(myEmail)=>{
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/getAllUsersForSearch/`,{email:myEmail});
      return(response.data)
    } catch (error) {
      return(error)
    }
  }
  const followUser=async(myEmail,userEmail)=>{
    console.log(myEmail,userEmail)
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/followUser/`,{myEmail,userEmail});
      return(response.data)
    } catch (error) {
      return(error)
    }
  }

  const unFollowUser=async(myEmail,userEmail)=>{
    console.log(myEmail,userEmail)
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/unFollowUser/`,{myEmail,userEmail});
      return(response.data)
    } catch (error) {
      return(error)
    }
  }
  
// 
const uploadPhoto =async (photo)=> {
  try {
    const response = await axios.post(`http://3.143.230.51:8000/api/uploadPhoto/`,photo);
    console.log(response)
return(response)
  } catch (error) {
return(error)  
}
}
// 
  const registerUser =async (user)=> {
        try {
          console.log(user,'here')
          const response = await axios.post(`http://3.143.230.51:8000/api/createUser/`,user);
    return(response)
        } catch (error) {
      return(error)  
      }
      }
  const createPost =async (data)=> {
    try {
      console.log(data)
      const response = await axios.post(`http://3.143.230.51:8000/api/createPost/`,data);
    return(response.data)
    } catch (error) {
  return(error)  
  }
  }

  const updateUserServer =async (data)=> {
    try {
      console.log(data)
      const response = await axios.post(`http://3.143.230.51:8000/api/updateUser/`,data);
    return(response.data)
    } catch (error) {
  return(error)  
  }
  }
  const deletePostServer =async (data)=> {
    try {
      console.log(data,'server')
      const response = await axios.post(`http://3.143.230.51:8000/api/deletePost/`,data);
    return(response.data)
    } catch (error) {
  return(error)  
  }
  }

  const updatePostServer =async (data)=> {
    try {
      console.log(data,'server')
      const response = await axios.post(`http://3.143.230.51:8000/api/updatePost/`,data);
    return(response.data)
    } catch (error) {
  return(error)  
  }
  }
  
  const searchUserByName = async (data)=> {
    try {
      const response = await axios.post(`http://3.143.230.51:8000/api/getUsersByName/`,data);
    return(response.data)
    } catch (error) {
  return(error)  
  }
  }
  export {
    uploadPhoto,
    searchUserByName,
    updatePostServer,
    deletePostServer,
    updateUserServer, 
    createPost,
    registerUser,
    unFollowUser,
    followUser,
    getAllUsersForSearch,
    getPostsByFollowing,
    findUser,
    signInUser
  }