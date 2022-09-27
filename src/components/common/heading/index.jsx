import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Heading(
    {
        color = 'textPrimary',
        variant='heading3',
        ...props
    }
) {
    return (
        <>
            <h4 className={Styles[variant]}> {props.label} </h4>
        </>
    );
}



Heading.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Heading;
