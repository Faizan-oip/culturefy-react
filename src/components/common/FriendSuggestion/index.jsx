import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/fontawesome-free-solid'
import Button from "../button";

function FriendSuggestion(props) {
    return (
        <div className={Styles.FriendSuggestion}>
            <div className={Styles.userImg}>
                <img src={props.userImg} alt='user' />
            </div>
            <div className={Styles.userDetails}>
                <h4> {props.userName} </h4>
                {
                    props.courcesCount && 
                    <p>
                        <span> {props.courcesCount} Courses </span>
                        {
                            props.videosCount && <span> {props.videosCount} Videos </span>
                        }
                    </p>
                }
                {/* <p> {props.courcesCount} Courses {props.videosCount} Videos </p> */}
                <Button label={`Follow ${props.userName.split(' ')[0]}`} icon={<FontAwesomeIcon icon={faPlus} />} size="smallBtn" variant="followBtn" />
            </div>
        </div>
    );
}



FriendSuggestion.propTypes = {
    userImg: PropTypes.any.isRequired,
    userName: PropTypes.string.isRequired,
    courcesCount: PropTypes.number,
    videosCount: PropTypes.number,
};
export default FriendSuggestion;