import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";

import "./GoodsItem.styl";

class GoodsItem extends React.Component {
  static defaultProps = {
    goodsItem: {},
    refresh: () => {}
  };

  static propTypes = {
    goodsItem: propTypes.object,
    refresh: propTypes.func
  };

  constructor(props) {
    super(props);

  }

  imageLoad(refresh) {
    refresh();
  }

  render() {
    return (
      <Link to={`/detail/${this.props.goodsItem.iid || this.props.goodsItem.item_id}`} className="goodsitem-wrapper">
        <div className="image-box">
          <img src={this.props.goodsItem.show ? this.props.goodsItem.show.img : this.props.goodsItem.image ? this.props.goodsItem.image : this.props.goodsItem.img} onLoad={this.imageLoad.bind(this, this.props.refresh)} alt=""/>
        </div>
        <p className="goods-name">{this.props.goodsItem.title}</p>
        <p className="price-box">￥{this.props.goodsItem.price}</p>
      </Link>
    )
  }

}

export default GoodsItem;
