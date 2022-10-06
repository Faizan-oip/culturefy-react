import React from "react";
import PropTypes from "prop-types";

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBell } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";

function Header() {
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
        <li className={Styles.profileImg}>
          <img
            src={require("../../../../assets-qa/images/admin-img.png")}
            alt="Profile Image"
          />
          {/* <div className="profile-box">
                        <div className="userbox">
                            <div className="user-imgbox">
                                <a href="#"><img src="./assets-qa/images/admin-img.png" alt="" /></a>
                            </div>
                            <div className="user-name">
                                <a href="#"><h2>John Doe</h2></a>
                                <p>IMC-00123</p>
                            </div>
                        </div>
                        <div className="progress-box">
                            <div className="progress-txt">
                                <p>Brand Progress</p>
                                <p>77%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style="width: 77%" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </div>
                        <div className="user-profile-links">
                            <h3>Account</h3>
                            <ul>
                                <li><a href="account-setting.html"><span><img src="assets-qa/images/setting-icon.svg" alt="" /></span> Settings</a></li>
                                <li><a href="#"><span><img src="assets-qa/images/privacy-icon.svg" alt="" /></span> Privacy</a></li>
                                <li><a href="#"><span><img src="assets-qa/images/globe-icon.svg" alt="" /></span> Language</a></li>
                                <li><a href="#"><span><img src="assets-qa/images/help-icon.svg" alt="" /></span> Help & Support</a></li>
                                <li><a href="#"><span><img src="assets-qa/images/terms-icon.svg" alt="" /></span> Terms & Policy</a></li>
                                <li className="logout-btn"><a href="index.html">Logout</a></li>
                            </ul>
                        </div>
                    </div> */}
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {};

export default Header;
