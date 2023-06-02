/* eslint-disable react/prop-types */
import { Card, Row, Col, Button } from "react-bootstrap";

const User = ({ user }) => {
  console.log(user);
  return (
    <div>
      <Card className="mb-3">
        <Row className="g-0">
          <Col md={4}>
            <Card.Img src={user.avatar_url} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.bio}</Card.Text>
              <Card.Text>
                <small className="text-medium-emphasis">
                  <a href={user.blog}>{user.blog}</a>
                </small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="me-3 btn btn-secondary">Takipçi: {user.followers}</Button>
              <Button className="me-3 btn btn-info">Takip Edilen: {user.following}</Button>
              <Button className="me-3 btn btn-danger">Repolar: {user.public_repos}</Button>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default User;
