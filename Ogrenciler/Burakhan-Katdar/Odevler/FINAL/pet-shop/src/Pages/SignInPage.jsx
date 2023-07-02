import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const handleGoogleSignIn = () => {
    // Google hesabıyla kaydolma işlemleri burada gerçekleştirilebilir
  };

  return (
    <Container fluid className="sign-in-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="p-5 shadow rounded bg-white">
            <h2 className="text-center mb-4">Sign In</h2>
            <Form>
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
                Sign In
              </Button>
              <div className="text-center mt-3">
                <Button variant="light" onClick={handleGoogleSignIn}>
                  Sign In with Google
                </Button>
                <Link to="/signup" className="mt-3 d-block text-center">
                  Don't have an account? Sign Up
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
