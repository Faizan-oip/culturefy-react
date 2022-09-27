import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Heading from '../../common/heading';
function Mentorship() {
  return (
    <div className={Styles.mentorshipCard}>
      <Heading label='Mentorship'  variant='heading4' />
    </div>
  )
}
Mentorship.propTypes = {
  // variant: PropTypes.string,
  // count: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
};
export default Mentorship