import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function EventImg(props) {
    return (
        <div className={Styles.eventImage}>
            <img src={props.eventImage} alt='event' />
        </div>
    );
}



EventImg.propTypes = {
    eventImage: PropTypes.any.isRequired,
};
export default EventImg;