
import React, {useState, useRef } from 'react';
import {Form,Button,Col,Row, Container, Toast, Stack} from 'react-bootstrap'

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Example from '../components/Example'

import NavBarCustom from '../components/NavBarCustom';
import message from '../assets/svg/message.svg'
import mail from '../assets/svg/mail.svg'



function Connect () {
    function refreshPage() {
    window.location.reload(false);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_satit8o', 'template_bho320n', form.current, 'YWVp2Q80-XerCp961')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

 




  return (
  
  <>
  <NavBarCustom></NavBarCustom>
    <Container className='ms-auto mt-1'>


   
          <div className='connectImg'  >
          {/* <Stack className='messageImg' direction="horizontal" gap={3}> */}
            <img src={mail} height='140' width='120' />
            <span> &nbsp;&nbsp;&nbsp;</span>
            
            <img src={message} height='140' width='120' />
            {/* </Stack> */}
          </div>
    

  <Form ref={form} onSubmit={sendEmail}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Name</Form.Label>
   
    <Form.Control as="textarea" rows={1} name='user_name'/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name='user_email' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={2} name='message'/>
  </Form.Group>
    <Example></Example>
  {/* <Button variant="primary" type="submit" onClick={sendEmail}>Submit</Button > */}
</Form>
</Container>

 
    </>
  );
};

export default Connect