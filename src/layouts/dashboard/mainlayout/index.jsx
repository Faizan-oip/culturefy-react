import React, { useState } from "react";
import Styles from "./styles.module.scss";
import MainSidebar from "./mainSidebar";
import MenuSidebar from "./menuSidebar";
import Header from "./header";
import PageHeader from "./pageHeader";
import ProfileBox from "../../../components/common/profileBox";
import userImage from "../../../assets-qa/images/admin-img.png";

function MainLayout() {
  const [showDropDown, setShowDropDown] = useState(false);
  console.log(showDropDown);
  return (
    <div className={Styles.mainWrapperqa}>
      <aside className={Styles.sidebar}>
        <MainSidebar />
        <MenuSidebar />
      </aside>
      <div className={Styles.mainContent}>
        <Header onClick={() => setShowDropDown(!showDropDown)} />
        <PageHeader />
        <ProfileBox
          userImg={userImage}
          show={showDropDown}
          brandProgress="77"
        />
      </div>
    </div>
  );
}

export default MainLayout;