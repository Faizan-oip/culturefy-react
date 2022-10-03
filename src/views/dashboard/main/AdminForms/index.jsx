import "./index.css";
import Button from "../../../components/common/button";
import Heading from "../../../components/common/heading";
import { useState } from "react";
import BusinessInfo1 from "./BusinessInfo1";
import BusinessInfo2 from "./BusinessInfo2";
import BusinessInfo3 from "./BusinessInfo3";

const Comp = () => {
   const [step, setStep] = useState(1);
   const nextStepHandler = (prevState) => {
      setStep(prevState + 1);
   };
   const prevStepHandler = (prevState) => {
      setStep(prevState - 1);
   };
   switch (step) {
      case 1:
         return <BusinessInfo1 Next={() => nextStepHandler(step)} />;
      case 2:
         return (
            <BusinessInfo2
               Next={() => nextStepHandler(step)}
               Prev={() => prevStepHandler(step)}
            />
         );
      case 3:
         return (
            <BusinessInfo3
               Next={() => nextStepHandler(step)}
               Prev={() => prevStepHandler(step)}
            />
         );
      default:
         break;
   }
};

const Main = () => {
   return (
      <>
         <div className="signForm">
            <div className="align-items-center d-flex flex-column h-100 justify-content-center second-column-signup-pages">

               <div className=" w-100 text-center mx-w-571">
                  <Heading label='Sign Up' variant='heading1' color='secondaryText' />
                  <div className="buttons-signup-login">
                     <Button
                        variant='outlined'
                        color='black'
                        label='Admin'
                        size='large'
                        icon={<img src={require('../../../assets-ze/icons/building.png')} alt="" />}
                     />
                     <Button
                        variant='filled'
                        color='secondary'
                        label='User'
                        size='large'
                        icon={<img src={require('../../../assets-ze/icons/people.png')} alt="" />}
                     />
                     <p className='already-have-acc'>Already have an account? <a href='signin.html'>Sign in</a> </p>
                  </div>
               </div>

            </div>

            <div className="d-flex flex-column h-100 justify-content-center second-column-signup-pages">
               <Comp />
            </div>

         </div>
      </>
   );
};

export default Main;
