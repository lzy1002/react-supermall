import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";

import "./CartItem.styl";

class CartItem extends React.Component {
  static defaultProps = {
    goods: {},
    changeCurrentState: () => {}
  };

  static propTypes = {
    goods: propTypes.object,
    changeCurrentState: propTypes.func
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  handleInputClick(iid) {
    this.props.changeCurrentState(iid);
  }

  render() {
    return (
      <div className="cartitem-wrapper">
        <div className="check-box">
          <input type="checkbox" checked={this.props.goods.current} readOnly onClick={this.handleInputClick.bind(this, this.props.goods.iid)}/>
        </div>
        <Link to={`/detail/${this.props.goods.iid}`} className="image-box">
          <img src={this.props.goods.image} alt=""/>
        </Link>
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
