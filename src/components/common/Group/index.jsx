import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Button from "../button";

function Group(
    {
        fontVariant = 'small',
        redDot = false,
        groupButtons = false,
        ...props
    }
) {
    return (
        <div className={`${Styles.GroupMain} ${props.border ? Styles[props.border] : ''}`}>
            <div className={Styles.Group}>
                <span className={Styles.grpImg}>
                    <img src={props.grpImage} alt='Group' />
                </span>
                <span className={Styles.grpName}>
                    <h4 className={Styles[fontVariant]}> {props.groupName} </h4>
                    {props.groupMembers ? <p> {props.groupMembers} members </p> : ''}
                </span>
            </div>
            {
                redDot ?
                    <span className={Styles.redDot}>
                    </span>
                    : ''
            }
            {
                groupButtons ?
                    <div className={Styles.groupActionBtns}>
                        <Button
                            label='View'
                            variant='transparent'
                            color='primary'
                            size='smallBtn'
                        />
                        <Button
                            label='Join'
                            variant='filled'
                            color='primary'
                            size='smallBtn'
                        />
                    </div>
                    : ''
            }
        </div>
    );
}



Group.propTypes = {
    grpImage: PropTypes.any.isRequired,
    fontVariant: PropTypes.string,
    groupName: PropTypes.string.isRequired,
    groupMembers: PropTypes.string,
    redDot: PropTypes.bool,
    groupButtons: PropTypes.bool,
    border: PropTypes.string,
};
export default Group;