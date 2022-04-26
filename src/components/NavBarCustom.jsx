import React from 'react'
import { useState,useEffect } from "react"
import {Nav,Navbar, Button, Stack,Alert } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { getAuth, updateProfile } from 'firebase/auth'
import {useNavigate,Link} from 'react-router-dom' 

export default NavBarCustom

function NavBarCustom() {
  const auth=getAuth()
  const [formData,setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })

  const { name, email } = formData

  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    navigate('/sign-in')
  } 
   const onHome = () => {
    navigate('/')
  } 
   const onConnect = () => {
    navigate('/connect')
  } 
  


  return (
  
   <>
    <Navbar bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand  >
        <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      madmoney
      </Navbar.Brand>
      <Nav className="ms-auto">

      {/* <Button variant="customlink" onClick={onConnect}>Link</Button>
        <Nav.Link className='custom-button'onClick='onConnect' >
          Connect
        </Nav.Link> */}
      <Nav.Link onClick={onHome} href="">Home</Nav.Link>
      <Nav.Link onClick={onConnect} href="">Connect</Nav.Link>

      <Button type='button' className='logOut' onClick={onLogout}>Log Out </Button>
 


      
    </Nav>
    </Container>
  </Navbar>
</>

  )
}
