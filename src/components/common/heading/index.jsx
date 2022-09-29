import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Heading(
    {
        color = 'primaryText',
        variant='heading3',
        ...props
    }
) {
    return (
        <>
            <h4 className={`${Styles.heading} ${Styles[variant]} ${Styles[props.border] }  ${Styles[color] } `}> {props.label} </h4>
        </>
    );
}



Heading.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
};

export default Heading;
