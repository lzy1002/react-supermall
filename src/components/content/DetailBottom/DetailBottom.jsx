import React from "react";
import propTypes from "prop-types";

import "./DetailBottom.styl";

class DetailBottom extends React.Component {
  static defaultProps = {
    goCart: () => {}
  };

  static propTypes = {
    goCart: propTypes.func
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="bottom-wrapper">
        <div className="bottom-left">
          <div className="left-item">
            <i className="icon people"></i>
            <p className="text">客服</p>
          </div>
          <div className="left-item">
            <i className="icon shop"></i>
            <p className="text">店铺</p>
          </div>
          <div className="left-item">
            <i className="icon collection"></i>
            <p className="text">收藏</p>
          </div>
        </div>
        <div className="bottom-right">
          <div className="go-cart" onClick={this.props.goCart}>加入购物车</div>
          <div className="buy">购买</div>
        </div>
      </div>
    )
  }

}

export default DetailBottom;
