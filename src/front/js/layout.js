import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { AdminDashboard } from "./pages/adminDashboard";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserDashboard } from "./pages/userDashboard";
import { Register } from "./component/register";
import { Login } from "./component/login";
import { Contact } from "./component/contact";
import { Maps } from "./component/maps";
import { Features } from "./component/features";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className=" bg-L-Gray-light h-full d-flex flex-column min-vh-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
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
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/maps">
              <Maps />
            </Route>
            <Route exact path="/home/features">
              <Features />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
