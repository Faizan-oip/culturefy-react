import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
function ProfileCount(
  {
    variant = 'primary',
    ...props
  }
) {
  return (
    <div className={Styles.countDiv}>
      <span
        className={` ${Styles.count} ${Styles[variant]} `}>
        {props.count}
      </span>
      <span className={Styles.text}>
        {props.text}
      </span>
    </div>
  )
}
ProfileCount.propTypes = {
  variant: PropTypes.string,
  count: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ProfileCount