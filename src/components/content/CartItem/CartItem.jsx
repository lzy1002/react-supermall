import React from "react";

import "./CartItem.styl";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="cartitem-wrapper">
        <div className="check-box">
          <input type="checkbox" checked={this.props.goods.current}/>
        </div>
        <div className="image-box">
          <img src={this.props.goods.image} alt=""/>
        </div>
        <div className="content-box">
          <h3 className="title">{this.props.goods.title}</h3>
          <p className="goods-desc">{this.props.goods.detailInfo}</p>
          <div className="price-box">
            <span className="price">￥{this.props.goods.price}</span>
            <span className="count">x{this.props.goods.count}</span>
          </div>
        </div>
      </div>
    )
  }

}

export default CartItem;
