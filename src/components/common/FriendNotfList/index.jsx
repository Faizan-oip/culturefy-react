import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'


function FriendNotfList(props) {
  return (


    <li>
      <a className='d-flex align-items-center justify-content-between'>
        <div className={Styles.usermsg}>
          <div className={Styles.avatar}>
            <img src={props.userImg} alt='user' />
          </div>
          <div className={Styles.msg}>
            <h4>{props.username} </h4>
            <p>{props.subtext}</p>
          </div>

        </div>
        <div>
        <p className={`${Styles.chattime} ${props.time === 'online' ? Styles.online : ''} `}>
          {
            props.time === 'online' ? '' : props.time
          }
        </p>

        {props.action}
        </div>

      </a>


    </li>



  )
}
FriendNotfList.propTypes = {
  userImg: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default FriendNotfList