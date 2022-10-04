import { React } from "react";
import SideSlider from "../../../views/dashboard/main/SideSlider";
import Styles from './styles.module.scss'

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className={Styles.mainAuthLayout}>
        <SideSlider />
        <div className={Styles.authLayoutChildrens}>{children}</div>
      </div>
    </>
  );
};
export default AuthLayout;
