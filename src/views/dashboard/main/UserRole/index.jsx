import * as React from "react";

import Button from "../../../../components/common/button";
import Heading from "../../../../components/common/heading";

import { Link } from "react-router-dom";
import "./index.css";


const UserRole = () => {
   return (
      <>
         <div className="align-items-center d-flex flex-column h-100 justify-content-center second-column-signup-pages">
            <div className=" w-100 text-center mx-w-571">
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
                  <p className='already-have-acc'>Already have an account? <a href='signin.html'>Sign in</a> </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserRole;
