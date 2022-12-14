import React from "react";
import { Switch, Route } from "react-router-dom";

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
// import SignIn from "../views/dashboard/auth/sign-in";
// import SignUp from "../views/dashboard/auth/sign-up";

// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";

//extrpages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";
import AuthLayout from "../layouts/dashboard/Auth";
import UserRole from "../views/dashboard/main/UserRole";
import BusinessInfoMain from "../views/dashboard/main/BusinessInfoMain";
import SignUp from "../views/dashboard/main/signup";
import SignIn from "../views/dashboard/main/signin";
import MainLayout from "../layouts/dashboard/mainlayout";
// import MainLayout from "../layouts/dashboard/mainlayout";

const SimpleRouter = () => {
  return (
    <>
      <Switch>
        {/* auth */}
        <Route path="/auth/confirm-mail" component={ConfirmMail} />
        <Route path="/auth/lock-screen" component={LockScreen} />
        <Route path="/auth/recoverpw" component={Recoverpw} />
        <Route path="/auth/sign-in" component={SignIn} />
        <Route path="/auth/sign-up" component={SignUp} />

        {/* error */}
        <Route path="/errors/error404" component={Error404} />
        <Route path="/errors/error500" component={Error500} />

        {/* extra-pages */}
        <Route path="/extra-pages/pages-maintenance" component={Maintenance} />
        <Route path="/extra-pages/pages-comingsoon" component={ComingSoon} />

        <Route path="/layout/mainlayout" component={MainLayout} />

        {/* Auth Main Routes  */}
        <AuthLayout>
          <Route path="/auth/userRole" component={UserRole} />
          <Route path="/auth/businessInfo" component={BusinessInfoMain} />
          <Route path="/auth/signup" component={SignUp} />
          <Route path="/auth/signin" component={SignIn} />
        </AuthLayout>


      </Switch>
    </>
  );
};

export default SimpleRouter;
