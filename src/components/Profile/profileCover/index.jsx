import React from 'react'
import Styles from './styles.module.scss'
import PropTypes from 'prop-types';
// import demoImg from '../../../assets-qa/images/demoImgs/profileDemo-img.png'
import adminImg from '../../../assets-qa/images/admin-img.png'

import BasicInfo from '../BasicInfo';
import ProfileCount from '../FollowText';
import Button from '../../common/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/fontawesome-free-solid'

import { FaHamburger, FaMapMarkerAlt, FaPen } from 'react-icons/fa';

function ProfileCover(props) {
  return (
    <div className={Styles.coverMain}>
      <div className={Styles.coverImg}>
        <img src={props.userCoverImg}  alt='cover'/>
      </div>
      <div className={Styles.userInfoMain}>
        <BasicInfo userImg={adminImg} userName='John Doe' designation='Manager' OpenTo='Open to Mentorship' />
        <div>
          <div className={Styles.profileCounts}>
            <ProfileCount count='500+' text='Points Balance' variant='primary' />
            <ProfileCount count='2k+' text='Points to Award' variant='yellow' />
            <ProfileCount count='1k+' text='Followers' variant='secondary' />
            <ProfileCount count='40' text='Following' variant='gray' />
          </div>
          <div className={Styles.profileActionBtns}>
            <Button 
              label='FOOD AND BEVERAGE' 
              // icon='fas fa-hamburger' 
              icon={<FaHamburger />}
              variant='transparent' 
              color='gray' 
            />
            <Button 
              label='ATALANTA GA' 
              // icon='fas fa-map-marker-alt' 
              icon={<FaMapMarkerAlt />}
              variant='transparent' 
              color='gray'
            />
            <Button 
              label='SHARE' 
              // icon='fas fa-share' 
              icon={<FontAwesomeIcon icon={faShare} />}
              variant='transparent' 
              color='gray' 
            />
            <Button
              label='Edit Profile'
              variant='filled'
              color='primary'
              // icon='fas fa-pen'
              icon={<FaPen />}
            />
            <Button
              label='More'
              variant='outlined'
              color='black'
              size='smallBtn'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
ProfileCover.propTypes = {
  userCoverImg: PropTypes.any,
};
export default ProfileCover