import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import Styles from './styles.module.scss'

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
            className={`${Styles.qaBtn1} ${Styles[variant] } ${Styles[color]} ${Styles[size]}  ${isLoading ? Styles.isLoadinga : '' } `}
            onClick={props.onClick}
        >
            {props.icon ? <span className={Styles.btnIcon}>   {props.icon} </span> : ""}
            <span>{props.label}</span>
            {isLoading ? <span className={Styles.spinner}> <FontAwesomeIcon icon={faSpinner} />  </span> : ""}
        </button>
    );
}



Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.any,
    icon: PropTypes.any,
    color: PropTypes.string,
    disable: PropTypes.bool,
    label: PropTypes.string.isRequired,
};

export default Button;
