import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import demoImg from '../../../assets-qa/images/demoImgs/profileDemo-img.png'
function BasicInfo(
  {
    userImg = demoImg,
    ...props
  }
) {
  return (
    <>
      <div className={Styles.userBasicInfo}>
        <div className={Styles.userProfileImg}>
          <img src={userImg} alt='Profile' className={Styles.imgFull} />
        </div>
        <h3 className={Styles.username}> {props.userName} </h3>
        <h4 className={Styles.userDesignation}> {props.designation} </h4>
        <p className={Styles.opentoText}> {props.OpenTo} </p>
      </div>
    </>
  )
}

BasicInfo.propTypes = {
  userImg: PropTypes.any,
  userName: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  OpenTo: PropTypes.string,
};


export default BasicInfo
