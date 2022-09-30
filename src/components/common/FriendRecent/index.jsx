import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function RecentFriend(props) {
    return (
        <div className={Styles.RecentFriend}>
            <div className={Styles.userImg}>
                <img src={props.userImg} alt='user' />
            </div>
            <p> {props.userName} </p>
        </div>
    );
}



RecentFriend.propTypes = {
    userImg: PropTypes.any.isRequired,
    userName: PropTypes.string.isRequired,
};
export default RecentFriend;