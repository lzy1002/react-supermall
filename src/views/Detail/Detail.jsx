import React from "react";
import {connect} from "react-redux";

import "./Detail.styl";

import actionCreator from "../../store/actionCreator/index.js";

import {getDetailData, getRecommendData} from "../../api/detail.js";
import {Goods, GoodsParams, CartData} from "../../assets/js/filter.js";

import Scroll from "../../components/common/Scroll/Scroll.jsx";

import TopBar from "../../components/content/TopBar/TopBar.jsx";
import Slider from "../../components/content/Slider/Slider.jsx";
import GoodsBox from "../../components/content/GoodsBox/GoodsBox.jsx";
import DetailBottom from "../../components/content/DetailBottom/DetailBottom.jsx";

const backImg = require("../../assets/images/common/back.svg");

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      goodsData: {},
      goodsShowImages: [],
      goodsParams: {},
      rateData: {},
      recommendData: [],
      topBarActiveIndex: 0
    };

    this.topBarCenterList = ["商品", "参数", "评论", "推荐"];
    this.topBarTextColor = "#666";
    this.swiperHeight = "300px";
    this.offsetTopList = [];
    this.propType = 3;
    this.cartData = {};

    this.scroll = React.createRef();
    this.paramsDom = React.createRef();
    this.rateDom = React.createRef();
    this.recommendDom = React.createRef();
  }

  componentDidMount() {
    this.getDetailData.call(this);
    this.getRecommendData.call(this);
  }

  getDetailData() {
    getDetailData(this.props.match.params.id).then(res => {
      console.log(res);
      this.setState((prevState) => ({
        goodsData: new Goods(res.data.result),
        goodsShowImages: res.data.result.detailInfo.detailImage[0].list,
        goodsParams: new GoodsParams(res.data.result.itemParams),
        rateData: res.data.result.rate.list[0]
      }));
      this.cartData = new CartData(res.data.result);
      console.log(this.cartData);
    })

  }

  getRecommendData() {
    getRecommendData().then((res) => {
      console.log(res);
      this.setState((prevState) => ({
        recommendData: res.data.data.list
      }))
    })
  }

  refresh() {
    this.scroll.current.refresh();
  }

  imageLoad(index) {
    if(index === this.state.goodsShowImages.length - 1) {
      this.offsetTopList.push(0);
      this.offsetTopList.push(-this.paramsDom.current.offsetTop + 45);
      this.offsetTopList.push(-this.rateDom.current.offsetTop + 45);
      this.offsetTopList.push(-this.recommendDom.current.offsetTop + 45);
    }
  }

  pageMove(index) {
    this.scroll.current.scrollTo(0, this.offsetTopList[index], 1000);
  }

  watchPosition(position) {
    const {x, y} = position;
    for(let i = 0; i< this.offsetTopList.length; i++) {
      if(((y <= this.offsetTopList[i] && y > this.offsetTopList[i + 1]) && i !== this.state.topBarActiveIndex) || (y <= this.offsetTopList[this.offsetTopList.length - 1] && i === this.offsetTopList.length - 1) && this.state.topBarActiveIndex !== this.offsetTopList.length - 1) {
        this.setState({
          topBarActiveIndex: i
        });
        console.log(this.state.topBarActiveIndex);
      }
    }
  }

  goCart() {
    this.props.addGoodsToCart(this.cartData);
  }

  render() {
    return (
      <div className="detail-wrapper">
        <TopBar activeIndex={this.state.topBarActiveIndex} pageMove={this.pageMove.bind(this)} left={<img onClick={() => this.props.history.goBack()} src={backImg} alt=""/>} centerList={this.topBarCenterList} textColor={this.topBarTextColor}/>
        <Scroll ref={this.scroll} probeType={this.propType} watchPosition={this.watchPosition.bind(this)}>
          <Slider list={this.state.goodsData.banner} swiperHeight={this.swiperHeight}/>
          <div className="goodsinfo-box">
            <h3 className="title">{this.state.goodsData.title}</h3>
            <div className="price-box">
              <span className="new-price">￥{this.state.goodsData.newPrice}</span>
              <span className="old-price">￥{this.state.goodsData.oldPrice}</span>
              <span className="tag">{this.state.goodsData.discountDesc}</span>
            </div>
            <div className="goods-message">
              {
                this.state.goodsData.columns ? this.state.goodsData.columns.map((item) => (
                  <span key={item}>{item}</span>
                )) : null
              }
            </div>
          </div>
          <div className="goodsshow-box">
            {
              this.state.goodsShowImages.map((item, index) => (
                <img key={item} src={item} alt="" onLoad={this.imageLoad.bind(this, index)}/>
              ))
            }
          </div>
          <div className="goodsparams-box" ref={this.paramsDom}>
            <table className="rule">
              <tbody>
              {
                this.state.goodsParams.rule ? this.state.goodsParams.rule.map((itemA, indexA) => (
                  <tr className="rule-tr" key={indexA}>
                    {
                      itemA.map((itemB, indexB) => (
                        <td className="rule-td" key={indexB}>{itemB}</td>
                      ))
                    }
                  </tr>
                )) : null
              }
              </tbody>
            </table>
            <table className="info">
              <tbody>
              {
                this.state.goodsParams.info ? this.state.goodsParams.info.map((itemA, indexA) => (
                  <tr className="info-tr" key={indexA}>
                    {
                      Object.keys(itemA).map((key, index) => (
                        <td className="info-td" key={index}>{itemA[key]}</td>
                      ))
                    }
                  </tr>
                )) : null
              }
              </tbody>
            </table>
          </div>
          <div className="rate-box" ref={this.rateDom}>
            {
              this.state.rateData.user ? (
                <div>
                  <div className="rate-head">
                    <span className="title">用户评价</span>
                    <span className="more">更多</span>
                  </div>
                  <div className="rate-content">
                    <div className="user">
                      <img src={this.state.rateData.user.avatar} alt=""/>
                      <span className="username">{this.state.rateData.user.uname}</span>
                    </div>
                    <div className="rate-text">
                      {this.state.rateData.content}
                    </div>
                    <div className="goods-info">
                      {this.state.rateData.style}
                    </div>
                  </div>
                </div>
              ) : null
            }
          </div>
          <div className="recommend-box" ref={this.recommendDom}>
            <div className="title">为您推荐</div>
            <GoodsBox goodsList={this.state.recommendData} refresh={this.refresh.bind(this)}/>
          </div>

        </Scroll>
        <DetailBottom goCart={this.goCart.bind(this)}/>
      </div>
    )
  }

}

export default connect(state => ({}), actionCreator.cart)(Detail);
