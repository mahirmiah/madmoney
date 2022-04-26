import { React,useState } from "react"
import Toast from 'react-bootstrap/Toast'
import {Navbar, Button, Stack,Alert,Row,Col } from "react-bootstrap"
import ToastContainer from 'react-bootstrap/ToastContainer'

export default IntroToast


function IntroToast() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
  return (
    // <Row>
    //   <Col md={6} className="mb-2">
        <ToastContainer position="bottom-end" className='m-5'>
        <Toast show={showA} onClose={toggleShowA}>
            {/* <Toast delay={3000} autohide> */}
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Let's Budget</strong>
            
          </Toast.Header>
          <Toast.Body>The 'Add Budget' button creates a category to track expenses. Selecting 'Add Expense' assigns expenses to the category.</Toast.Body>
        </Toast>
  </ToastContainer>
  )
}
