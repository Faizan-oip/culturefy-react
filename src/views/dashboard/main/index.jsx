// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

// import inst5Img from "../../../assets-qa/images/inst5.png";
import "./index.css";
import Button from "../../../components/common/button";
import Heading from "../../../components/common/heading";
// import TextFieldQa from "../../../components/common/textFieldQa";
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
       
      </>
   );
};

export default Main;
