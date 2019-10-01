import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header"
import Inventory from "./pages/Inventory/Inventory.js"
import Toolbar from "./components/Toolbar"
import Skins from "./pages/Skins/Skins.js"
import Contact from "./pages/Contact/Contact.js"


function App() {
  return (
    <Router>
      <>
      <Route component={Toolbar}/>
     <Switch>
      <Route exact path="/" component={ Header } />
      <Route exact path="/Inventory" component= { Inventory } />
      <Route exact path="/Skins" component= { Skins } />
      <Route exact path="/Contact" component= { Contact } />
      <Route path='/About' component={() => { 
     window.location.href = 'https://github.com/cday02?tab=repositories'; 
     return null;

}}/>
      {/* <Route exact path="/About" component= { About } />
      <Route exact path="/Contact" component= { Contact } />
      <Route exact path="/Featured" component= { Featured } /> */}
      </Switch>
      </>
    </Router>
  );
}

export default App;
