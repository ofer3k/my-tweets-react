import React from 'react'
import { BrowserRouter, Link,Switch } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function NavBarAfterLogin() {
 const handleLogout=()=>{
     localStorage.clear()
     window.location.reload();
    }
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/main">Social-Tweets</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/profile">Profile</Nav.Link>
    <Nav.Link href="/searchUsers">Search</Nav.Link>
    <Nav.Link href="/createPost">Post</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={handleLogout} eventKey={2} >
        logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            {/* <div><Link to={'/main'}>Main</Link></div>
            <div><Link to={'/profile'}>Profile111</Link></div>
            <div><Link to={'/newPost'}>New Post</Link></div>
            <hr/> */}
        </div>
    )
}
