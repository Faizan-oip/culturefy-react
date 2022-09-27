import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Input(
    {
        variant = 'white',
        type='text',
        color='gray',
        ...props
    }
) {
    return (
        <>
            <input type={type} placeholder={`${props.placeholder}`} className={` ${Styles.inpuField} ${Styles[variant]} ${Styles[color]}`} />
        </>
    );
}



Input.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};

export default Input;
