import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Group(props) {
    return (
        <div className={Styles.Group}>
            <span className={Styles.grpImg}>
                <img src={props.grpImage} alt='Group' />
            </span>
            <span className={Styles.grpName}>
                {props.groupName}
            </span>
        </div>
    );
}



Group.propTypes = {
    grpImage: PropTypes.any.isRequired,
    groupName: PropTypes.string.isRequired,
};
export default Group;