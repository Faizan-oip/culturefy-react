import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBell } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";
import Heading from "../../../../components/common/heading";

function PageHeader() {
  return (
    <div className={Styles.pageHeader}>
      <div>
        <Heading label="Account" variant="heading1" />
      </div>
      <div>
        
      </div>
    </div>
  );
}

PageHeader.propTypes = {};

export default PageHeader;
