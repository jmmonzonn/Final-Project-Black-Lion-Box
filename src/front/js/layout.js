import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { AdminDashboard } from "./pages/adminDashboard";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserDashboard } from "./pages/userDashboard";
import { Register } from "./component/register";
import { Login } from "./component/login";
import { Contact } from "./component/contact";
import { Maps } from "./component/maps";
import { UploadView } from "./component/upload";
import { Features } from "./component/features";
import { SubscriptionTiers } from "./component/adminSubscriptionTiers";
import { Success } from "./component/success";
import { Cancel } from "./component/cancel";
import { Payment } from "./component/payment";
import { NotFound } from "./component/404.js";
import { TermsAndConditions } from "./component/userTerms";
import { FirstSubscription } from "./pages/subscriptions";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const [logged, setLogged] = useState(
    localStorage.getItem("token") ? true : false
  );

  useEffect(() => {
    console.log("usefectworkins");
  }, [logged]);

  return (
    <div className=" bg-L-Gray-light dark:bg-D-Gray-dark min-h-full">
      <BrowserRouter basename={basename}>
        <Navbar logged={logged} setLogged={setLogged} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/dashboard">
            <UserDashboard />
          </Route>
          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <Route exact path="/upload">
            <UploadView />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login logged={setLogged} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/maps">
            <Maps />
          </Route>
          <Route exact path="/features">
            <Features />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/cancel">
            <Cancel />
          </Route>
          <Route exact path="/subscriptions">
            <SubscriptionTiers />
          </Route>
          <Route exact path="/userterms">
            <TermsAndConditions />
          </Route>
          <Route exact path="/addsubscription">
            <FirstSubscription />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
