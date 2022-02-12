import React from "react";
import Header from "./component/header/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Contact from "./component/contact/Contact";
import { Route,Switch } from "react-router-dom";
import About from "./component/about/About";
import NaviLink from "./component/navLink/NaviLink";
import FooterTag from "./component/footerTag/FooterTag";
function App(){
  return (
    <div className="app">
      <Switch>
        <Route exact path = "/" component = {Header}/>
        <Route path = "/contact" component = {Contact} />
        <Route path = "/about" component = {About} />
      </Switch>
      <NaviLink />
      {/*<FooterTag />*/}
    </div>
  )
}


export default App;