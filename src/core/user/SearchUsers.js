import React, { useEffect, useState } from 'react'
import {getAllUsersForSearch, searchUserByName} from '../../server'
import UserCard from './UserCard'
import decode from 'jwt-decode';
import { findUser } from '../../server';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PrimarySearchAppBar from '../NavBarAfterLogin'
import '../styles/search.css'

export default function SearchUsers() {
    const [users,setUsers]=useState([])
    const [myEmail,setMyEmail]=useState()
    const [myFollowing,setMyFollowing]=useState([])
    const [myUser,setMyUser]=useState()
    let user;

    const initialUsersForSearch = async()=>{
      console.log(user,'myEmail')
        const getAllUsers=await getAllUsersForSearch(user.email)
        setUsers(getAllUsers)  
    }

    
    const initialUser= async ()=>{
        try {
          const token=localStorage.getItem('token')
          const id = await decode(token)
           user= await findUser(id.data)
          setMyEmail(user.email)
          setMyFollowing(user.following)
          setMyUser(user)
          console.log(user,'user')
        } catch (error) {
          console.log(error)
        }
      }
    useEffect( async () => {
       await initialUser()
       await initialUsersForSearch()
    }, [])

    const handleChange=async(e)=>{
      try {
        const answer= await searchUserByName({name:e.target.value})
        setUsers(answer)
        // console.log(answer)  
      } catch (error) {
        console.log(error)
        return
      }
      
    }
    return (
        <div>
            <PrimarySearchAppBar/>
              
      
            <Container>
            
      <Row className={"justify-content-md-center"}>
      <div style={{width:'80%'}} className={'search_container'}>
      <div class="search-box ">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input onChange={handleChange} type="text" class="input-search" placeholder="Type to Search..."/>
      </div>
    </div>
            </Row>
            {users.map((element,i)=>
           <Row className={"justify-content-md-center"}>
                <UserCard  myEmail={myEmail} myFollowing={myFollowing} myUser={myUser} user={element} key1={i} /> 
            </Row>  
            )}
            </Container>
        </div>
    )
}
