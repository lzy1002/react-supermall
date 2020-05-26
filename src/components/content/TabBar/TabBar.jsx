import React from "react";
import {NavLink, withRouter} from "react-router-dom";

import "./TabBar.styl";

const homeIcon = require("../../../assets/images/tabbar/home.svg");
const homeActiveIcon = require("../../../assets/images/tabbar/home_active.svg");
const categoryIcon = require("../../../assets/images/tabbar/category.svg");
const categoryActiveIcon = require("../../../assets/images/tabbar/category_active.svg");
const cartIcon = require("../../../assets/images/tabbar/cart.svg");
const cartActiveIcon = require("../../../assets/images/tabbar/cart_active.svg");
const profileIcon = require("../../../assets/images/tabbar/profile.svg");
const profileActiveIcon = require("../../../assets/images/tabbar/profile_active.svg");

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="tabbar-wrapper">
        <NavLink className="tabbar-item" to="/" exact>
          {this.props.location.pathname === "/" ? <img src={homeActiveIcon} alt=""/> : <img src={homeIcon} alt=""/>}
          <p className="text">主页</p>
        </NavLink>
        <NavLink className="tabbar-item" to="/category">
          {this.props.location.pathname === "/category" ? <img src={categoryActiveIcon} alt=""/> : <img src={categoryIcon} alt=""/>}
          <p className="text">分类</p>
        </NavLink>
        <NavLink className="tabbar-item" to="/cart">
          {this.props.location.pathname === "/cart" ? <img src={cartActiveIcon} alt=""/> : <img src={cartIcon} alt=""/>}
          <p className="text">购物车</p>
        </NavLink>
        <NavLink className="tabbar-item" to="/profile">
          {this.props.location.pathname === "/profile" ? <img src={profileActiveIcon} alt=""/> : <img src={profileIcon} alt=""/>}
          <p className="text">我的</p>
        </NavLink>
      </div>
    )
  }

}

export default withRouter(TabBar);
