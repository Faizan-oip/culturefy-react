import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'

function Group(
    {
        fontVariant = 'small',
        ...props
    }
) {
    return (
        <div className={`${Styles.Group} ${Styles[fontVariant]}`}>
            <span className={Styles.grpImg}>
                <img src={props.grpImage} alt='Group' />
            </span>
            <span className={Styles.grpName}>
                <h4> {props.groupName} </h4>
                {props.groupMembers ? <p> {props.groupMembers} members </p> : ''}
            </span>
        </div>
    );
}



Group.propTypes = {
    grpImage: PropTypes.any.isRequired,
    fontVariant: PropTypes.string,
    groupName: PropTypes.string.isRequired,
    groupMembers: PropTypes.string,
};
export default Group;