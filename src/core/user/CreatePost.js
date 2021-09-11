import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../NavBarAfterLogin'
import Button from '@material-ui/core/Button';
import '../styles/create_post.css'
import decode from 'jwt-decode';
import { findUser,createPost } from '../../server';

export default function CreatePost() {
    const [isSuccess,setIsSuccess]=useState({isSuccess:false,msg:'asdasd'})
    const [isError,setIsError]=useState({isError:false,msg:'error'})

    const [userEmail,setUserEmail]=useState()
    const [userName,setUserName]=useState()
    const [userProfilePic,setUserProfilePic]=useState()
    const [postData,setPostData]=useState({title:'',content:''})

    const initialUser= async ()=>{
        try {
          const token=localStorage.getItem('token')
          const id = await decode(token)
          const user= await findUser(id.data)
          setUserEmail(user.email)
          setUserName(user.name)
          setUserProfilePic(user.profilePic)
        } catch (error) {
            setIsError({isError:true,msg:'somthing went wrong fetching the user'})
        }
      }
    useEffect(async () => {
     await initialUser()
    }, [])

    const handleChange=(e)=>{
        setPostData({...postData,[e.target.name]:e.target.value})
    }
    const validateContent=()=>{
      if(postData.content&&postData.title)
      return true

      return false
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const content= postData.content.trim()
            const title=postData.title.trim()
            const isValid=validateContent()
            if(!isValid){
            setIsSuccess({isSuccess:false,msg:''})            
          setIsError({isError:true,msg:'You Must Enter Title And Content'})
          return  
            }
            const answer=await createPost({title,content,email:userEmail,ownerName:userName,ownerPic:userProfilePic})
            if(answer.createdAt)
              {          
                setIsError({isError:false,msg:''})  
            setIsSuccess({isSuccess:true,msg:'post added'})       
               }
        } catch (error) {
          setIsError({isError:true,msg:'somthing went wrong posting'})  
        }
    }
    return (
        <div>
          <PrimarySearchAppBar/>
    {isSuccess.isSuccess&&<h3 className={'post_state_success'} >{isSuccess.msg}</h3>}
    {isError.isError&&<h3 className={'post_state_error'} >{isError.msg}</h3>}
              <div class="paper">
    <div class="holes"></div>
    <textarea onChange={handleChange} maxlength ='40' className={'textarea1'} name={'title'} placeholder="title"></textarea>
    <textarea onChange={handleChange} maxlength ='110' className={'textarea2'} name={'content'} placeholder="what are you thinking about?"></textarea>
    </div>
    <span >
    <Button onClick={handleSubmit} type={'submit'} className={'submit_post'} variant="contained" color="dark">
    Post your thought
    </Button>
    </span>

              </div>
  
    )
}
