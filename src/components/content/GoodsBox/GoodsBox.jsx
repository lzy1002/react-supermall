import React from "react";
import propTypes from "prop-types";

import "./GoodsBox.styl";

import GoodsItem from "../GoodsItem/GoodsItem.jsx";

class GoodsBox extends React.Component {
  static defaultProps = {
    goodsList: [],
    refresh: () => {}
  };

  static propTypes = {
    goodsList: propTypes.array,
    refresh: propTypes.func
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="goods-box">
        {
          this.props.goodsList.map((item) => (
            <GoodsItem key={item.acm} goodsItem={item} refresh={this.props.refresh}/>
          ))
        }
      </div>
    )
  }

}

export default GoodsBox;
