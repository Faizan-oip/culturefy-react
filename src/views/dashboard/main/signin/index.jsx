import React from 'react';
import Heading from '../../../../components/common/heading';
import IconButton from '../../../../components/common/iconButton';
// import Styles from './styles.module.scss'
import Styles from '../signup/styles.module.scss'


import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'


import { faEnvelope, faUser } from '@fortawesome/fontawesome-free-solid'

import goggleImg from '../../../../assets-ze/images/image-sliders/Google.png'
import TextFieldQa from '../../../../components/common/textFieldQa';
import Button from '../../../../components/common/button';

const SignIn = () => {
   return (
      <>
         <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
            <div className={Styles.w100}>
               <Heading label='Sign In' variant='heading1' />
               <div className={`${Styles.socialIcons} ${Styles.dFlexRow} `}>
                  <IconButton icon={<img src={goggleImg} alt='Goggle' />} />
                  <IconButton icon={<FontAwesomeIcon icon={faFacebookF} />} />
                  <IconButton icon={<FontAwesomeIcon icon={faTwitter} />} />
               </div>
               <div className={Styles.signUpForm}>
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faEnvelope} />}
                     placeholder='youremail@gmail.com'
                     type='email'
                  />
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faUser} />}
                     placeholder='********'
                     type='password'
                  />
                  <p className={`${Styles.rememText} ${Styles.dFlexRow}`}>
                     <span>
                        Remember me next time
                     </span>
                     <div class="custom-checkbox">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me" class="remember-custom"></label>
                     </div>
                  </p>
                  <Button
                     variant='filled'
                     color='secondary'
                     label='SIGN IN'
                     size='large'
                  />
                  <p className={Styles.rememText}>Forget password</p>
                  <p className={Styles.rememText}>
                     Don't have account?
                     <span>
                        <Link to={'/auth/signup'} className={Styles.cSecondary}>
                           Sign Up
                        </Link>
                     </span>
                  </p>

               </div>
            </div>
         </div>
      </>
   );
};

export default SignIn;
