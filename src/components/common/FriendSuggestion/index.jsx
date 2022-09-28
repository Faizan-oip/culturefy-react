import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Heading from "../heading";
import Button from "../button";

function FriendSuggestion(props) {
    return (
        <div className={Styles.FriendSuggestion}>
            <div className={Styles.userImg}>
                <img src={props.userImg} alt='user' />
            </div>
            <div className={Styles.userDetails}>
                <h4> {props.userName} </h4>
                <p> {props.courcesCount} Courses {props.videosCount} Videos </p>
                <Button label={`Follow ${props.userName.split(' ')[0]}`} icon='fas fa-plus' size="smallBtn" variant="followBtn" />
            </div>
        </div>
    );
}



FriendSuggestion.propTypes = {
    userImg: PropTypes.any.isRequired,
    userName: PropTypes.string.isRequired,
    courcesCount: PropTypes.string.isRequired,
    videosCount: PropTypes.string.isRequired,
};
export default FriendSuggestion;