import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./views/Home/Home.jsx";
import Category from "./views/Category/Category.jsx";
import Cart from "./views/Cart/Cart.jsx";
import Profile from "./views/Profile/Profile.jsx";

import TabBar from "./components/content/TabBar/TabBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-wrapper" style={{width: "100%", height: "100%", position: "relative"}}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        <TabBar/>
      </div>
    )
  }

}

export default App;
