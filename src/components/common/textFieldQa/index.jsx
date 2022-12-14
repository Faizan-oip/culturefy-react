import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function TextFieldQa(
    {
        type = 'text',
        placeholder='Description Here..',
        ...props
    }
) {
    return (
        <>
            <div className={Styles.TextFieldQa}>
                { props.label ? <label htmlFor="inp"> {props.label} </label> : '' }
                { props.icon ? props.icon : '' }
                <input type={type} placeholder={`${placeholder}`} className={` ${Styles.inpuField}`} />
            </div>
        </>
    );
}



TextFieldQa.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};

export default TextFieldQa;