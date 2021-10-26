import React from 'react';
import LoginImage from '../Images/Login_side_image.jpg';
import {Container, Row, Col} from 'react-bootstrap';

function Login(){
    return(
        <Container className="Login_main_container">
        <Row className="justify-content-md-center">
          <Col xs lg="5">
             <img className="image_login" src={LoginImage} alt="Side Image" />
           </Col>
          <Col md="auto">
          <form className="login-div col-md-4 mb-3">
        <h3>ATTENDANCE SYSTEM</h3>
        <h4>LOG IN</h4>
        <div className="form-group input ">
          <input type="email" placeholder=" Email" required className="form-control fas fa-envelope-square input" id="exampleInputEmail1" aria-describedby="emailHelp" /><br /><br />
        </div>
        <div className="form-group ">
          <input className="input" type="password" placeholder=" Password" required className="form-control fas fa-key input" id="exampleInputPassword1" />
        </div>
        <div>
          <button type="button" className="btn btn-success">LOGIN</button>
        </div>
      </form>
          </Col>
        </Row>  
      </Container>
    );
}

export default Login();