import React from "react";
import PropTypes from 'prop-types';
import Styles from './style.module.scss'

function IconButton(
    {
        disable = false,
        background = 'transparent',
        isLoading = false,
        color='black',
        ...props
    }
) {
    return (
        <button
            disabled={disable}
            className={` ${Styles.iconBtn} ${Styles[background]} ${Styles[color]} ${isLoading ? `${Styles[isLoading]}`  : ""} 
         `}
            onClick={props.onClick}
        >
            {props.icon ? <span><i className={props.icon}> </i></span> : ""}
        </button>
    );
}



IconButton.propTypes = {
    background: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    color: PropTypes.string,
};

export default IconButton;
