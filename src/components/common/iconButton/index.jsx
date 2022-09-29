import React from "react";
import PropTypes from 'prop-types';
import Styles from './style.module.scss'
function IconButton(
    {
        disable = false,
        variant = 'transparent',
        isLoading = false,
        color='black',
        ...props
    }
) {
    return (
        <button
            disabled={disable}
            className={` ${Styles.iconBtn} ${Styles[variant]} ${Styles[color]} ${isLoading ? `${Styles[isLoading]}`  : ""} 
         `}
            onClick={props.onClick}
        >
            {props.icon ? <span>  {props.icon}  </span> : ""}
        </button>
    );
}



IconButton.propTypes = {
    variant: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.any.isRequired,
    disable: PropTypes.bool,
    color: PropTypes.string,
};

export default IconButton;
