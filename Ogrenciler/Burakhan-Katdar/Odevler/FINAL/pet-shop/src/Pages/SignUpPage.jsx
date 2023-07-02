import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSignUp = () => {
    // Kayıt olma işlemleri burada gerçekleştirilebilir
  };

  return (
    <Container className="sign-up-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12}>
          <div className="p-5 shadow rounded bg-white">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Sign Up
              </Button>
              <div className="text-center mt-3">
                <Link to="/signin" className="mt-3 d-block text-center">
                  Already have an account? Sign In
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
