import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import Styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import homeIcon from '../../../../assets-qa/images/homeIcon.svg'
import chessIcon from '../../../../assets-qa/images/chessIcon.svg'
import settingIcon from '../../../../assets-qa/images/settingIcon.svg'

function MainSidebar() {
  return (
    <>
      <div className={Styles.asideLeft}>
        <div className={Styles.logo}>
          <Link to="/">
            <img
              src={require("../../../../assets-qa/images/Logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className={Styles.asideLeftNav} >
          <ul>
            <li>
              <Link to="/">
                <img
                  src={homeIcon}
                  alt="Home Icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src={chessIcon}
                  alt="Chess Icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src={settingIcon}
                  alt="Setting Icon"
                />
              </Link>
            </li>
          </ul>
        </div>
        <img
          src={require("../../../../assets-qa/images/asideBottom-line.png")}
          alt=""
          className={Styles.asideBottomImg}
        />
      </div>
    </>
  );
}

MainSidebar.propTypes = {};

export default MainSidebar;
