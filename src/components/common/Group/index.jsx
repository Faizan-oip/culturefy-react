import React from "react";
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Button from "../button";

function Group(
    {
        fontVariant = 'small',
        ...props
    }
) {
    return (
        <div className={`${Styles.GroupMain} ${props.border ? Styles[props.border] : ''}`}>
            <div className={Styles.Group}>
                <span className={Styles.grpImg}>
                    <img src={props.image} alt='Group' />
                </span>
                <span className={Styles.grpName}>
                    <h4 className={Styles[fontVariant]}> {props.heading} </h4>
                    {props.subHeading ? <p> {props.subHeading} </p> : ''}
                </span>
            </div>

            {
                props.action ?
                    <span>
                        {props.action}
                    </span>
                    : ''
            }
            
        </div>
    );
}



Group.propTypes = {
    image: PropTypes.any.isRequired,
    fontVariant: PropTypes.string,
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string,
    border: PropTypes.string,
    action: PropTypes.any,
};
export default Group;