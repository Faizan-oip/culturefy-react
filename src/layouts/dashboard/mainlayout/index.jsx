import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";
import MainSidebar from "./mainSidebar";
import MenuSidebar from "./menuSidebar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";

function MainLayout() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <div className={Styles.sidebar}>
              <MainSidebar />
              <MenuSidebar />
            </div>
          </Col>
          <Col md={8}>
          <Header />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
