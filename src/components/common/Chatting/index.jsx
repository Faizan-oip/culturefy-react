import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FiVideo } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { BsThreeDots } from 'react-icons/bs';





function Chatting({ personType = 'reciever', ...props }) {
  return (
    <>
      <div className={`${Styles.ChattingMain} ${personType === 'sender' ? Styles.sender : Styles.reciever} `}>



        <p className={Styles.chatcenterdate}>{props.date}</p>
        <div className={Styles.chatConmain}>
          <div className={Styles.chatmeassage}>
            <div className={Styles.Chatuserimg}>
              <img src={props.chatImgPerson} alt="" />
              <p>  <span className={`${Styles.onlineIcon} ${props.Personstatus === 'online' ? Styles.online : ''} `}></span></p>
            </div>
            <p className={Styles.chattime}>{props.hours}</p>
            <div className={Styles.chatmeassagetext}>
              <p>
                {props.chatmeassagetext}
              </p>
            </div>
            <button className={Styles.iconbtn}>
              <BsThreeDots />
            </button>
          </div>
        </div >

      </div >
    </>
  )
}
Chatting.propTypes = {
  chatImg: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default Chatting