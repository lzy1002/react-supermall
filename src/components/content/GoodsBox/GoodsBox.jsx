import React from "react";
import propTypes from "prop-types";

import "./GoodsBox.styl";

import GoodsItem from "../GoodsItem/GoodsItem.jsx";

class GoodsBox extends React.Component {
  static defaultProps = {
    goodsList: []
  };

  static propTypes = {
    goodsList: propTypes.array
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="goods-box">
        {
          this.props.goodsList.map((item) => (
            <GoodsItem key={item.acm} goodsItem={item}/>
          ))
        }
      </div>
    )
  }

}

export default GoodsBox;
