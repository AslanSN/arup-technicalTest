import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeView from "./views/homeView.jsx";
import injectContext from "./store/appContext";

import Navbar from "./components/StaticComponents/Navbar/Navbar.jsx";
import RequestBar from "./components/StaticComponents/RequestBar/RequestBar.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <RequestBar />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
