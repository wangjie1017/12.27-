import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Meishi from "./pages/Meishi"
import { Switch, Route, NavLink, Redirect } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Meishi" component={Meishi} />
            <Route path="/" render={()=><Redirect to="/Home" />} />
        </Switch>
      </div>
    );
  }

}

export default App;
