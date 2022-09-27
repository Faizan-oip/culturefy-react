import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Paragraph(
    {
        variant = 'primary',
        ...props
    }
) {
    return (
        <>
            <p className={`${Styles.paragraph} ${Styles[variant]}`} >
                {props.label}
            </p>
        </>
    );
}



Paragraph.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Paragraph;
