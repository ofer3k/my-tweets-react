import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import NavBar from '../NavBar';
import '../styles/sign_up.css'
import { registerUser,uploadPhoto } from '../../server';

export default function SignUp() {
  let history = useHistory();
  const [signUpInfo,setSignUpInfo]=useState(  
    {
     name:'',
     email:'',
     password:'',
     about:'',
     profilePic:'' 
    }
  )  
  
 const [isError,setIsError]=useState({isError:false,msg:''})
 const [isLoading,setIsLoading]=useState(false)
 const [isSuccess,setIsSuccess]=useState({isSuccess:false,msg:''})
 const [isShowPassword,setIsShowPassword]=useState(false)
//  console.log(isSuccess.isSuccess)
  
 const handleChange=(e)=>{
    setSignUpInfo({...signUpInfo,[e.target.name]:e.target.value})
  }

  const verifyData=async()=>{
  if(signUpInfo.name.length===0)
  return ('NAME')
  const Mail=isEmail(signUpInfo.email)
  if(!Mail)
  return ('MAIL')
  const Password=isStrongPassword(signUpInfo.password)
  if(!Password)
  return ('PASSWORD')
  
  return('GOOD')
}

const sendUserToServer=async()=>{
let photo = document.getElementById("image-file").files[0];
let formData = new FormData();
formData.set("photo", photo);
try {
  const url= await uploadPhoto(formData)
  const data= await registerUser({...signUpInfo,profilePic:url.data})
  return(data)
} catch (error) {
  return (error)
}
}

const handleSubmit=async(e)=>{
  e.preventDefault()
const data=await verifyData()
switch (data) {
  case 'NAME':{
    setIsError({isError:true,msg:'Please Enter A Name'})
    return 
    }
  case 'MAIL':{
    setIsError({isError:true,msg:'Mail not valid'})
    return 
    }
  case 'PASSWORD':{
    setIsError({isError:true,msg:'Password Must = up, down, special, numer , 8 characters long'})
    return
    }
  case 'GOOD':{
      setIsError({isError:false,msg:''})
      try {
        setIsLoading(true)
        const data=await sendUserToServer()
        if(data.data.msg)
        {
        setIsLoading(false)
        setIsError({isError:true,msg:'email is taken'})}
        else{
        setIsLoading(false)
        setIsSuccess({isSuccess:true,msg:`Welcome ${signUpInfo.name} To Our Comunity`})
        }  
        return        
      } catch (error) {
        setIsLoading(false)
        setIsError({isError:true,msg:'email is taken'})
        return
      }
 
    
    }
  default:
    return 
}
}

return (
        <span>
        <NavBar/>
        <div class="wrapper fadeInDown">
  <div id="formContent">
    {isLoading&&<h2 class="inactive underlineHover">Loading...</h2>}
    {isSuccess.isSuccess&&<h2 class="inactive underlineHover">{isSuccess.msg}</h2>}
    {isError.isError&&<h2 class="inactive underlineHover">{isError.msg}</h2>}
    {!isError.isError&&!isSuccess.isSuccess&&!isLoading&&<h2 class="inactive underlineHover">Sign Up </h2>}
    <form>
      <input onChange={handleChange} type="text" id="login" class="fadeIn second" name="name" placeholder="Full Name"/>
      <input onChange={handleChange} type="text" id="login" class="fadeIn second" name="email" placeholder="Email"/>
      <input onClick={()=>{setIsShowPassword(!isShowPassword)}} onChange={handleChange} type={isShowPassword?"text":"password"} id="login" class="fadeIn second" name="password" placeholder="Password"/>
      <input onChange={handleChange} type="text" id="login" class="fadeIn second" name="about" placeholder="About"/>
     {/*  */}
     <label className={'upload_photo_label'} for="image-file">
  <div className={'upload_photo_div'}>Click or Drop picture</div>
  <input accept={'image/*'} type="file" id="image-file"/>
</label>
     {/*  */}
      {/* <input className={'file_input'}  type="file" id="image-file" class="fadeIn third" name="profilePic" placeholder="profile Pic"/> */}
      {!isSuccess.isSuccess&&<input onClick={handleSubmit} type="submit" class="fadeIn fourth" value="Register"/>}
      {isSuccess.isSuccess&&<input onClick={()=>{history.push("/signIn")}} type="submit" class="fadeIn fourth" value="Go Login"/>}
      
    </form>
  </div>
</div>
        </span>
    )
}
