import React, { useEffect,useContext, useState } from 'react'
import Button from '@material-ui/core/Button';
import UserContext from '../../contexts/User-context'
import decode from 'jwt-decode';
import Avatar from '@material-ui/core/Avatar';
import { findUser, getPostsByFollowing,updateUserServer } from '../../server';
import NavBarAfterLogin from '../NavBarAfterLogin';
import EditPost from './EditPost';
import { Accordion, Container, Form, Navbar } from 'react-bootstrap';

export default function Profile() {
    const {userInfo,dispatch} = useContext(UserContext);
    const [updateUser,setUpdateUser]=useState({name:'',about:'',email:''})
    const [posts,setPosts]=useState([])

    const initialUser= async ()=>{
        try {
          const token=localStorage.getItem('token')
          const id = await decode(token)
          const user= await findUser(id.data)
          dispatch({ type: 'INITIAL_USER', value:user })
          const posts=await getPostsByFollowing(user.email)
          setPosts(posts)
          setUpdateUser({name:user.name,about:user.about,email:user.email})
        } catch (error) {
          console.log(error)
        return
          }
      }
    
    useEffect(() => {
      initialUser()
    }, [])
  const handleChange=(e)=>{
  setUpdateUser({...updateUser,[e.target.name]:e.target.value})
  console.log(updateUser,'update user')
  }

const handleUserSubmit= async()=>{
  try {
  const answer= await updateUserServer(updateUser)     
    console.log(answer)
} catch (error) {
  console.log(error)
  return  
  }
}

    return (
        <div>
          <NavBarAfterLogin/>
          <Navbar style={{cursor:'default'}} expand="lg" variant="light" bg="light">
  <Container>
  {/* <Avatar alt={userInfo.name} aria-label="recipe" src={userInfo.profilePic} /> */}

    <Navbar.Brand >{userInfo.name}</Navbar.Brand>
    <Navbar.Brand >Followers: {userInfo.followers.length}</Navbar.Brand>
    <Navbar.Brand >Following: {userInfo.following.length}</Navbar.Brand>
  </Container>
</Navbar>
          <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Edit Info</Accordion.Header>
    <Accordion.Body>
    <Form style={{width:'60%',margin:'0 auto'}}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control name={'name'} onChange={handleChange} type="email" placeholder={userInfo.name} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>About</Form.Label>
    <Form.Control name={'about'} onChange={handleChange} as="textarea" placeholder={userInfo.about} rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control disabled type="email" placeholder={userInfo.email} />
  </Form.Group>
  <Button onClick={handleUserSubmit} style={{border:'2px solid black',opacity:'0.8'}} variant="outline-secondary">Update</Button>
</Form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Edit Posts</Accordion.Header>
    <Accordion.Body>
      {posts.length===0&&<h1>There Are No Posts</h1>}
      {posts.map((e,i)=> (
        <EditPost key={i} post={e} />
      ))}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    )
}
