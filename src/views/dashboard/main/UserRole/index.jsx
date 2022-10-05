import * as React from "react";

import Button from "../../../../components/common/button";
import Heading from "../../../../components/common/heading";

import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";


const UserRole = () => {
   return (
      <>
         <div className="align-items-center d-flex flex-column h-100 justify-content-center second-column-signup-pages">
            <div className={Styles.userRoleMain}>
               <Heading label='Sign Up' variant='heading1' color='secondaryText' />
               <div className="buttons-signup-login">
                  <Link to={'/auth/businessInfo'}>
                     <Button
                        variant='outlined'
                        color='black'
                        label='Admin'
                        size='large'
                        icon={<img src={require('../../../../assets-ze/icons/building.png')} alt="" />}
                     />
                  </Link>
                  <Link to={'/auth/signup'}>
                     <Button
                        variant='filled'
                        color='secondary'
                        label='User'
                        size='large'
                        icon={<img src={require('../../../../assets-ze/icons/people.png')} alt="" />}
                     />
                  </Link>
                  <p className={Styles.alreadyHaveAcc}>
                     Already have an account?
                     <Link to={'/auth/signin'} >
                        Sign in
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserRole;
