import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useContext(AuthContext);

  if (!user?.isLoggedIn) {
    return (
      <Container className="w-100">
        <Row>
          <Col xs={6} md={4}>
            <Link to='https://www.instagram.com/oauth/authorize?client_id=777493744100016++&redirect_uri=https%3A%2F%2Finstagramapi-production.up.railway.app%2Fapi%2Fv1%2Fauth&scope=user_profile%2Cuser_media&response_type=code&logger_id=51079ded-ac30-4961-9ae6-20d28133f70f'>sign in</Link>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container className="w-100">
      <Row>
        <Col xs={6} md={4}>
          <Image
            width="30px"
            height="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            roundedCircle
          />{" "}
          Taimoor
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
