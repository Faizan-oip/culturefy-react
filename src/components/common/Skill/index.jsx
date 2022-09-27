import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Skill(props) {
    return (
        <li className={Styles.skillItem}>
            <i className={props.icon}></i>
            <span> {props.label} </span>
        </li>
    );
}



Skill.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Skill;
