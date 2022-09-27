import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Heading from '../../common/heading';
import Paragraph from '../../common/paragraph';
import Skill from '../../common/Skill';
function Mentorship() {
  return (
    <div className={Styles.mentorshipCard}>
      <Heading label='Mentorship' variant='heading4' />
      <Paragraph
        label={`I have been in the workforce for over 10 years. Throughout that time, I have gained a lot of success, but only after about 5 times as many failures. I am the kind of mentor who is not afraid to tell you when you've failed, but will inspire you to get back up.`}
      />
      <Heading label='Professional Skills' variant='heading4' />
      <ul className={Styles.menList}>
        <Skill icon='fa-regular fa-lightbulb' label='Writing' />
        <Skill icon='fa-regular fa-lightbulb' label='Attention to Detail' />
        <Skill icon='fa-regular fa-lightbulb' label='Strong Vocabulary' />
      </ul>
      <Heading label='Life Experiences' variant='heading4' />
      <ul className={Styles.menList}>
        <Skill icon='fa-solid fa-earth-americas' label='Overcoming adversity' />
        <Skill icon='fa-solid fa-earth-americas' label='Getting a graduate degree' />
        <Skill icon='fa-solid fa-earth-americas' label='Being passed on a promotion' />
      </ul>
    </div>
  )
}
Mentorship.propTypes = {
  // variant: PropTypes.string,
  // count: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
};
export default Mentorship