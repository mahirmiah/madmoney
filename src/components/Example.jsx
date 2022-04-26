import React, {useState, useRef } from 'react';
import {Form,Button,Col,Row, Container, Toast, Stack} from 'react-bootstrap'
import Connect from '../pages/Connect'

function Example() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={8}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>Few seconds ago</small>
          </Toast.Header>
          <Toast.Body>Success! You have sent an email.</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button variant='primary' type='submit' onClick={(sendEmail) => setShow(true)}>Submit</Button>

      </Col>
    </Row>
  );
}

// render(<Example />);

export default Example
