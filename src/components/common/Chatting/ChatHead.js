import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FiVideo } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { BsThreeDots } from 'react-icons/bs';







function ChatHead(props) {
    return (
        <>


            <div className={Styles.MainChatBox}>
                <div className={`${Styles.userInfo} userInfo d-flex align-content-center gap2`}>
                    <div className={Styles.userimg}>
                        <img src={props.userImg} alt='user' />
                    </div>
                    <div className={Styles.usernamestatus}>
                        <p>{props.title}</p>
                        <p> <span>{props.activeStatus}</span> <span className={`${Styles.onlineIcon} ${props.status === 'online' ? Styles.online : ''} `}></span></p>
                    </div>
                </div>

                <div className={Styles.Usericons}>
                    <IoCallOutline />
                    <FiVideo />
                    <AiOutlineInfoCircle />
                </div>
            </div>




        </>
    )
}
ChatHead.propTypes = {
    chatImg: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};
export default ChatHead