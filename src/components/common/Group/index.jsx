import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles.module.scss";
import Button from "../button";

function Group({
  fontVariant = "small",
  redDot = false,
  groupButtons = false,
  followButton = false,
  followBackButton = false,
  ...props
}) {
  return (
    <div
      className={`${Styles.GroupMain} ${
        props.border ? Styles[props.border] : ""
      }`}
    >
      <div className={Styles.Group}>
        <span className={Styles.grpImg}>
          <img src={props.grpImage} alt="Group" />
        </span>
        <span className={Styles.grpName}>
          <h4 className={Styles[fontVariant]}> {props.groupName} </h4>
          {props.groupMembers ? <p> {props.groupMembers} members </p> : ""}
          {props.time ? <p> {props.time} </p> : ""}
        </span>
      </div>
      {redDot ? <span className={Styles.redDot}></span> : ""}
      {groupButtons ? (
        <div className={Styles.groupActionBtns}>
          <Button
            label="View"
            variant="transparent"
            color="primary"
            size="smallBtn"
          />
          <Button
            label="Join"
            variant="filled"
            color="primary"
            size="smallBtn"
          />
        </div>
      ) : (
        ""
      )}

      {followButton ? (
        <div className={Styles.followButton}>
          <Button label="Followed" variant="outlined" size="medium" />
        </div>
      ) : (
        ""
      )}

      {followBackButton ? (
        <div className={Styles.followBackButton}>
          <Button label="Followed Back" variant="outlined" size="medium" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

Group.propTypes = {
  grpImage: PropTypes.any.isRequired,
  fontVariant: PropTypes.string,
  groupName: PropTypes.string.isRequired,
  groupMembers: PropTypes.string,
  redDot: PropTypes.bool,
  groupButtons: PropTypes.bool,
  border: PropTypes.string,
  time: PropTypes.string,
  followButton: PropTypes.bool,
  followBackButton: PropTypes.bool,
};
export default Group;
