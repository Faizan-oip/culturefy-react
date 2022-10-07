import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBell } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";
import Heading from "../../../../components/common/heading";
import Search from "../../../../components/common/search";

function PageHeader() {
  return (
    <div className={Styles.pageHeader}>
      <div className={Styles.pageHeading}>
        <Heading label="Account" variant="heading1" />
      </div>
      <div className={Styles.pageSeach} >
        <Search
          placeholder="Serach  resource groups"
          icon={true}
          variant="seacrh2"
          // buttonFunc={() => SearchQa()}
        />
      </div>
    </div>
  );
}

PageHeader.propTypes = {};

export default PageHeader;
