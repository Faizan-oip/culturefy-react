import { React } from "react";
import SideSlider from "../../../views/dashboard/main/SideSlider";

const AuthLayout = ({ children }) => {
  return (
    <>
      <SideSlider />
      {children}
    </>
  );
};
export default AuthLayout;