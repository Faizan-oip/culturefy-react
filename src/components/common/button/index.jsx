import React from "react";
import PropTypes from 'prop-types';
import './style.scss'

function Button(
    {
        disable = false,
        variant = 'filled',
        color = 'primary',
        isLoading = false,
        size='medium',
        ...props
    }
) {
    return (
        <button
            disabled={disable}
            className={`qaBtn1 ${variant} ${color} ${size} ${isLoading ? "isLoading" : ""} 
         `}
            onClick={props.onClick}
        >
            {props.icon ? <span className="btnIcon"><i className={props.icon}> </i></span> : ""}
            <span>{props.label}</span>
            {isLoading ? <span className='spinner'> <i class="fas fa-spinner"></i> </span> : ""}
        </button>
    );
}



Button.propTypes = {
    variant: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    color: PropTypes.string,
    disable: PropTypes.bool,
    label: PropTypes.string.isRequired,
};

export default Button;
