import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function RecognitionUser(props) {
  return (
    <div className={Styles.recognitionUserMain}>
      <div className={Styles.flex}>
        <div className={Styles.userImg45}>
          <img src={props.userImg} alt='user' className={Styles.imgFull} />
        </div>
        <span className={Styles.username}> {props.username} </span>
      </div>
      <span className={Styles.time}> {props.time} </span>
    </div>
  )
}
RecognitionUser.propTypes = {
  userImg: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default RecognitionUser