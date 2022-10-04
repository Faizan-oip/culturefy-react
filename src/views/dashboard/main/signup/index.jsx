import React from 'react';
import Heading from '../../../../components/common/heading';
import IconButton from '../../../../components/common/iconButton';
import Styles from './styles.module.scss'

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faUser, faLock } from '@fortawesome/fontawesome-free-solid'

import goggleImg from '../../../../assets-ze/images/image-sliders/Google.png'
import TextFieldQa from '../../../../components/common/textFieldQa';
import Button from '../../../../components/common/button';

const SignUp = () => {
   return (
      <>
         <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
            <div className={Styles.w100}>
               <Heading label='Getting started' variant='heading1' />
               <p>Create account to continue!</p>
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
                     placeholder='username21'
                  />
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faLock} />}
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
                     label='SIGN UP'
                     size='large'
                  />
                  <p className={Styles.rememText}>Forget password</p>
                  <p className={Styles.rememText}>
                     Already have an account?
                     <span>
                        <Link to={'/auth/signin'} className={Styles.cSecondary}>
                           Sign in
                        </Link>
                     </span>
                  </p>

               </div>
            </div>
         </div>
      </>
   );
};

export default SignUp;
