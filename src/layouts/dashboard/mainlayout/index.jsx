import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";
import MainSidebar from "./mainSidebar";
import MenuSidebar from "./menuSidebar";
import { Container, Row, Col } from "react-bootstrap";

function MainLayout() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className={Styles.sidebar}>
              <MainSidebar />
              <MenuSidebar />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
