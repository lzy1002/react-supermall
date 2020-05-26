import React from "react";
import propTypes from "prop-types";

import {Consumer} from "../../../views/Home/Home.jsx";

import "./GoodsItem.styl";

class GoodsItem extends React.Component {
  static defaultProps = {
    goodsItem: {}
  };

  static propTypes = {
    goodsItem: propTypes.object
  };

  constructor(props) {
    super(props);

  }

  imageLoad(contextData) {
    contextData.refresh();
  }

  render() {
    return (
      <Consumer>
        {
          (contextData) => (
            <div className="goodsitem-wrapper">
              <div className="image-box">
                <img src={this.props.goodsItem.show.img} onLoad={this.imageLoad.bind(this, contextData)} alt=""/>
              </div>
              <p className="goods-name">{this.props.goodsItem.title}</p>
              <p className="price-box">￥{this.props.goodsItem.price}</p>
            </div>
          )
        }
      </Consumer>
    )
  }

}

export default GoodsItem;
