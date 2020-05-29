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

  }

  componentDidMount() {
    this.props.initAllInputState();
  }

  changeCurrentState(iid) {
    this.props.changeCurrentState(iid);
  }

  handleAllCheckedClick() {
    this.props.changeAllInputState();
  }

  totalPrice() {
    return this.props.cart.filter(item => item.current).reduce((a, b) => {
      return a + (b.count * b.price);
    }, 0).toFixed(2);
  }

  render() {
    return (
      <div className="cart-wrapper">
        <TopBar centerList={[`购物车(${this.props.cart.length})`]} bgColor="lightpink"/>
        <Scroll>
          {
            this.props.cart.map((item, index) => (
              <CartItem key={item.iid} goods={item} changeCurrentState={this.changeCurrentState.bind(this)}/>
            ))
          }
        </Scroll>
        <div className="cart-bottom">
          <div className="all-box">
            <input type="checkbox" checked={this.props.allChecked} readOnly onClick={this.handleAllCheckedClick.bind(this)} disabled={this.props.cart.length === 0}/>
            <span>全选</span>
          </div>
          <div className="total-price">
            合计：<span>￥{this.totalPrice.call(this)}</span>
          </div>
          <div className="go-buy">去计算</div>
        </div>
      </div>
    )
  }

}

export default connect(state => ({...state.cart}), actionCreator.cart)(Cart);
