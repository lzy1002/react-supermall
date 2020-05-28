import React from "react";
import {connect} from "react-redux";

import "./Cart.styl";

import actionCreator from "../../store/actionCreator/index.js";

import Scroll from "../../components/common/Scroll/Scroll.jsx";

import TopBar from "../../components/content/TopBar/TopBar.jsx";
import CartItem from "../../components/content/CartItem/CartItem.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cartTotalCount: 0
    }
  }

  render() {
    return (
      <div className="cart-wrapper">
        <TopBar centerList={[`购物车(${this.state.cartTotalCount})`]} bgColor="lightpink"/>
        <Scroll>
          {
            this.props.cart.map((item, index) => (
              <CartItem key={item.iid} goods={item}/>
            ))
          }
        </Scroll>
        <div className="cart-bottom">
          <div className="all-box">
            <input type="checkbox"/>
            <span>全选</span>
          </div>
          <div className="total-price">
            合计：<span>￥999</span>
          </div>
          <div className="go-buy">去计算</div>
        </div>
      </div>
    )
  }

}

export default connect(state => ({...state.cart}), actionCreator.cart)(Cart);
