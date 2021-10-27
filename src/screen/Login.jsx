import React from 'react';
import LoginImage from '../Images/Login_side_image.jpg';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';

function Login() {
  return (

    <div className="Login_main_container">
      <Row className="firstdiv">
        <Col xs lg="5">
          <img className="image_login" src={LoginImage} alt="Side Image" />
        </Col>
        <Col md="auto" xs={6}>
          <h1 className="h1tag">Admin Portal</h1>
          <div className="login_div">
          <h4 className="h4tag">LOGIN</h4>
          <Form>
            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <p><a className="link" href="">Forgot Password</a></p>
              
            </Form.Group>
            <Button className="btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login();