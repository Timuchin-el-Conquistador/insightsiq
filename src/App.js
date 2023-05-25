import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

import './App.css'

import { PagePublic } from "./routes/index";

// const PageRouteAuthenticated = [
//   {
//     path: "/dashboard1",
//     component: TeamLayoutsTypeFifth,
//   },
//   { path: "/dashboard2", component: TeamLayoutsTypeNinth },
// ];

// const PageRoutePublic = [
//   {
//     path: "/",
//     component: App,
//   },
//   {
//     path: "/admin",
//     component: AdminLogin,
//   },
// ];

function App() {


  const PublicRoute = () => {
    const publicRoute = [];
    PagePublic.map((item) =>
      publicRoute.push(
        <Route exact path={item.path} component={item.component} />
      )
    );
    return publicRoute;
  };

  const CheckIfAuthenticated = () => {
    
      return PublicRoute();
    
  };
  document.body.classList.add('default')
  /*const images = document.getElementsByTagName('img')
  const h1 = document.getElementsByTagName('h1')
  const h2 = document.getElementsByTagName('h1')
  const h3 = document.getElementsByTagName('h1')
  const h4 = document.getElementsByTagName('h1')
  const span = document.getElementsByTagName('span')
  const p = document.getElementsByTagName('p')
  const a = document.getElementsByTagName('a')
  const strong= document.getElementsByTagName('strong')
  Array.from(images).map(image => image.classList.add('default-img'))
  Array.from(h1).map(h1 => h1.classList.add('default-h1'))
  Array.from(h2).map(h2 => h2.classList.add('default-h2'))
  Array.from(h3).map(h3 => h3.classList.add('default-h3'))
  Array.from(h4).map(h4 => h4.classList.add('default-h4'))
  Array.from(span).map(span => span.classList.add('default-span'))
  Array.from(p).map(p => p.classList.add('default-p'))
  Array.from(a).map(a => a.classList.add('default-a'))
  Array.from(strong).map(strong => strong.classList.add('default-strong'))
  for(var i=0; i<images; i++){
    images[i].classList.add('default-img');
    }*/
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={App} />
          <Route exact path="/advertisers" component={TeamLayoutsTypeEighth} />
          <Route exact path="/admin" component={AdminLogin} /> */}
          {CheckIfAuthenticated()}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
