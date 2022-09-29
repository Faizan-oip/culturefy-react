import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Skill(props) {
    return (
        <li className={Styles.skillItem}>
            <span className={Styles.icon}>
                {props.icon}
            </span>
            <span> {props.label} </span>
        </li>
    );
}



Skill.propTypes = {
    icon: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
};

export default Skill;
