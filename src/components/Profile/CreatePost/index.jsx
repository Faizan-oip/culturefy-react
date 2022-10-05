import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Input from '../../common/Input';
import Button from '../../common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaMoneyBillWave } from 'react-icons/fa';
import {  faVideo , faImage , faSmile , faFile , faCalendar } from '@fortawesome/fontawesome-free-solid'

function CreatePost(
  {
    variant = 'primary',
  }
) {
  return (
    <>
      <div className={`${Styles.userCreatePost} ${Styles[variant]}`}>
        <Input placeholder='Who Would you like to recognize?' />
        <div className={Styles.createpostBtnsMain}>
          <div className={Styles.createpostBtns}>
            <Button
              label='Reward'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-money-bill-1-wave'
              icon={<FaMoneyBillWave />}
              size='sizeAuto'
            />
            <Button
              label='Live Video'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-video'
              icon={<FontAwesomeIcon icon={faVideo} />}
              size='sizeAuto'
            />
            <Button
              label='Photo/Video'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-image'
              icon={<FontAwesomeIcon icon={faImage} />}
              size='sizeAuto'
            />
            <Button
              label='Kudos'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-face-smile'
              icon={<FontAwesomeIcon icon={faSmile} />}
              size='sizeAuto'
            />
            <Button
              label='Gif'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-file'
              icon={<FontAwesomeIcon icon={faFile} />}
              size='sizeAuto'
            />
            <Button
              label='Event'
              variant='transparent'
              color='whiteColor'
              // icon='fa-solid fa-calendar-days'
              icon={<FontAwesomeIcon icon={faCalendar} />}
              size='sizeAuto'
            />
          </div>
          <Button
            label='Post'
            variant='white'
            color='black'
            size='smallBtn'
          />
        </div>

      </div>
    </>
  )
}

CreatePost.propTypes = {
  variant: PropTypes.string,
};


export default CreatePost
