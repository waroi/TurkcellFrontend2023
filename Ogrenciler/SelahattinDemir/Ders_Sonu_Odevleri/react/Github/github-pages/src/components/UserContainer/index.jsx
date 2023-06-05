/* eslint-disable react/prop-types */
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../CustomStyle.module.css";

const UserContainer = ({ user, setUser }) => {
  const handleCounter = () => {
    setUser((prevUser) => ({
      ...prevUser,
      followers: prevUser.followers + (prevUser.isIncremented ? -1 : 1),
      isIncremented: !prevUser.isIncremented,
    }));
  };

  return (
    <div className={style.container}>
      <Card className={style.noBorder}>
        <Row className={style.noBorder}>
          <Col md={8}>
            <Card.Body className={style.card}>
              <h1>{user.name}</h1>
              <Card.Text>{user.bio}</Card.Text>
              <Card.Text>
                <a href={user.blog}>{user.blog}</a>
              </Card.Text>

              <div className={style.footer}>
                <button className={style.btn} onClick={handleCounter}>
                  Takipçi: {user.followers}
                </button>
                <button className={style.btn}>
                  Takip Edilen: {user.following}
                </button>
                <button className={style.btn}>
                  Repolar: {user.public_repos}
                </button>
              </div>
            </Card.Body>
          </Col>
          <Col md={4} className={style.img}>
            <Card.Img src={user.avatar_url} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserContainer;
