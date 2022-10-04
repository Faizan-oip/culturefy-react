import { React } from "react";
import SideSlider from "../../../views/dashboard/main/SideSlider";
import Styles from './styles.module.scss'

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className={Styles.mainAuthLayout}>
        <div className={Styles.authLayoutChildrens}>
          <SideSlider />
        </div>
        <div className={Styles.authLayoutChildrens}>{children}</div>
      </div>
    </>
  );
};
export default AuthLayout;
