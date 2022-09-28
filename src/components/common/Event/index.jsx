import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Event(props) {
    return (
        <div className={Styles.eventMain}>
            <div className={`${Styles.dflexBt} ${Styles.eventHead}`}>
                <div className={Styles.ownerImg}>
                    <img src={props.ownerImg} alt='owner' />
                </div>
                <div>
                    <h4>
                        {props.eventTitle}
                    </h4>
                    <p>
                        {props.eventDetails}
                    </p>
                </div>
            </div>
            <div className={`${Styles.eventAnalytic} ${Styles.dflexBt}`}>
                <span> {props.eventSeen} Seen </span>
                <span className={Styles.allImgs}>
                    <div className={Styles.userImgsm}>
                        <img src={props.seenedUser} alt='user' />
                    </div>
                    <div className={Styles.userImgsm}>
                        <img src={props.seenedUser} alt='user' />
                    </div>
                    <div className={Styles.userImgsm}>
                        <img src={props.seenedUser} alt='user' />
                    </div>
                </span>
            </div>
        </div>
    );
}


Event.propTypes = {
    ownerImg: PropTypes.any.isRequired,
    eventTitle: PropTypes.string,
    eventDetails: PropTypes.string,
    eventSeen: PropTypes.number,
    seenedUser: PropTypes.any,
};
export default Event;