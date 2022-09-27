import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import Input from '../../common/Input';
import Button from '../../common/button';
function CreatePost(
  {
    variant = 'primary',
    ...props
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
              icon='fa-solid fa-money-bill-1-wave'
            />
            <Button
              label='Live Video'
              variant='transparent'
              color='whiteColor'
              icon='fa-solid fa-video'
            />
            <Button
              label='Photo/Video'
              variant='transparent'
              color='whiteColor'
              icon='fa-solid fa-image'
            />
            <Button
              label='Kudos'
              variant='transparent'
              color='whiteColor'
              icon='fa-solid fa-face-smile'
            />
            <Button
              label='Gif'
              variant='transparent'
              color='whiteColor'
              icon='fa-solid fa-file'
            />
            <Button
              label='Event'
              variant='transparent'
              color='whiteColor'
              icon='fa-solid fa-calendar-days'
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
  // userImg: PropTypes.any,
};


export default CreatePost
