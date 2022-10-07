import React from "react";
import PropTypes from "prop-types";

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBell } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";

function Header(props) {
  return (
    <div className={Styles.headerMain}>
      <ul className="d-flex align-items-center justify-content-end">
        <li>
          <Link to="/" className={Styles.iconHead}>
            <FontAwesomeIcon icon={faCalendar} />
          </Link>
        </li>
        <li>
          <Link to="/" className={Styles.iconHead}>
            <FontAwesomeIcon icon={faBell} />
            <span className={Styles.notfCount}>
                <span>2</span>
            </span>
          </Link>
        </li>
        <li className={Styles.profileImg} onClick={props.onClick}>
          <img
            src={require("../../../../assets-qa/images/admin-img.png")}
            alt="Profile Image"
          />
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;
