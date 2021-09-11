import React, { useEffect,useContext, useState } from 'react'
import decode from 'jwt-decode';
import { findUser,getPostsByFollowing } from '../../server';
import PrimarySearchAppBar from '../NavBarAfterLogin'
import Post from './Post'
import NewUserCarousel from './NewUserCarousel';
import MainPageContext from '../../contexts/MainPage-context'

export default function Main() {
    const [posts,setPosts]=useState([])
    const {mainPageInfo,dispatch} = useContext(MainPageContext);
    
    const initialUser= async ()=>{
      try {
        const token=localStorage.getItem('token')
        const id = await decode(token)
        const user= await findUser(id.data)
        const listOfFollowing=await getPostsByFollowing(user.following)
        setPosts(listOfFollowing)
        dispatch({ type: 'initial_user',name:user.name,profilePic:user.profilePic,following:user.following})
      } catch (error) {
        console.log(error)
      }
    }
  useEffect(async() => {
   await initialUser()
  }, [])

    return (
        <div className={posts.length===0?'grayBackground':'whiteBackground'} >
          <PrimarySearchAppBar/>
          {mainPageInfo.following.length===0&&
            <NewUserCarousel  />
          }
          {
            posts.length===0&&mainPageInfo.following.length>0&&
            <div className={"section"}  >
           <div class="container_main">
        <p>
        {mainPageInfo.name}
        <br/>
        You are doing greate!
        </p>
        <hr/>
        <p>
        The users you follow have not <span style={{borderBottom:'dotted'}}>yet</span> posted thoughts
        </p>
    </div>
        </div>
          }
          {posts.map((e,i)=><Post key={i} post={e} />)}
        </div>
    )
}
