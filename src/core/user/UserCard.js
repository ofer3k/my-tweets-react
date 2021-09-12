import React, { useEffect, useState } from 'react'
import { followUser,unFollowUser } from '../../server';
import '../styles/user_card.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { CardHeader,Card,Avatar, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';

export default function UserCard(props) {
    const{user,myEmail,myFollowing,myUser,key1}=props
    const [amFolling,setAmFollowing]=useState()

    const handleSubmit= async()=>{
        try {
            if(amFolling){
                const unfollow=await unFollowUser(myEmail,user.email)
                if(unfollow==='updated')
                setAmFollowing(!amFolling)
            }
            else{
                const follow=await followUser(myEmail,user.email)
                if(follow==='updated')
                setAmFollowing(!amFolling)
            }    
        } catch (error) {
            return
        }
        
    }

    const amIfollowing=()=>{
if(myUser.following.includes(user.email))
{
    setAmFollowing(true) 
}
else{
    setAmFollowing(false)
}
}
const isFollowingMe=()=>{
    if(user.following.includes(myEmail))
        return true
else
    return false
    }

useEffect(() => {
    amIfollowing()
}, [])
console.log(user,'key')

return (
<Card style={{width:'80%',margin:'1rem',padding:'1rem'}}>
        <CardHeader
          avatar={
            <Avatar alt={user.name} aria-label="recipe" src={user.profilePic} />
          }
          title={user.name}
          subheader={user.about}/> 
        <CardActions disableSpacing>
        
        <i class="fas fa-user-plus"></i>
            <button  onClick={handleSubmit}  className={amFolling?'green':"blue"} >
                a
                {/* {amFolling?<FontAwesomeIcon color={'white'} size={'lg'} icon={faUserTimes} />:<FontAwesomeIcon color={'grey'} size={'lg'} icon={faUserPlus} />} */}
                </button>
                
        </CardActions>
      </Card>
    )
}
