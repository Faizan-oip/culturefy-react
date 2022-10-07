import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles.module.scss";

import { Link } from "react-router-dom";

import {
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { BiCheckShield, BiGlobe } from "react-icons/bi";
import Button from "../button";

function ProfileBox({ show = false, ...props }) {
  const profileLinks = [
    {
      id: "settings",
      icon: <AiOutlineSetting />,
      title: "Settings",
    },
    {
      id: "privacy",
      icon: <BiCheckShield />,
      title: "Privacy",
    },
    {
      id: "language",
      icon: <BiGlobe />,
      title: "Language",
    },
    {
      id: "helpAndSupport",
      icon: <AiOutlineQuestionCircle />,
      title: "Help & Support",
    },
    {
      id: "termsAndPolicy",
      icon: <AiOutlineFileText />,
      title: "Terms & Policy",
    },
  ];

  return (
    <div className={`${Styles.profileBox} ${show ? Styles.show : ""}`}>
      <div className={Styles.userbox}>
        <div className={Styles.userImgbox}>
          <Link to="/">
            <img src={props.userImg} alt="user" />
          </Link>
        </div>
        <div className={Styles.userName}>
          <Link to="/">
            <h2>John Doe {props.userName} </h2>
          </Link>
          <p>IMC-00123 {props.userid} </p>
        </div>
      </div>
      <div className={Styles.progressBox}>
        <div className={Styles.progressTxt}>
          <p>Brand Progress</p>
          <p> {props.brandProgress}% </p>
        </div>
        <div className={Styles.progress}>
          <div
            style={{ width: `${props.brandProgress}%` }}
            className={Styles.progressBar}
          ></div>
        </div>
      </div>
      <div className={Styles.userProfileLinks}>
        <h3>Account</h3>
        <ul>
          {profileLinks.map((profileLink) => {
            return (
              <>
                <li key={profileLink.id}>
                  <Link
                    to="/"
                    className={`${Styles.userLinks} d-flex align-items-center gap-2`}
                  >
                    {profileLink.icon}
                    <span>{profileLink.title}</span>
                  </Link>
                </li>
              </>
            );
          })}
          <li className={Styles.logoutBtn}>
            <Button label="Logout" variant="filled" color="secondary" />
          </li>
        </ul>
      </div>
    </div>
  );
}

ProfileBox.propTypes = {
    show: PropTypes.bool,
    userImg: PropTypes.any,
    userName: PropTypes.any,
    userid: PropTypes.any,
    brandProgress: PropTypes.string,
};

export default ProfileBox;