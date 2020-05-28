import React from "react";

import "./Home.styl";

import {getMultidata, getGoodsList} from "../../api/home.js";

import Scroll from "../../components/common/Scroll/Scroll.jsx";

import TopBar from "../../components/content/TopBar/TopBar.jsx";
import Slider from "../../components/content/Slider/Slider.jsx";
import TabControl from "../../components/content/TabControl/TabControl.jsx";
import GoodsBox from "../../components/content/GoodsBox/GoodsBox.jsx";
import ToTop from "../../components/content/ToTop/ToTop.jsx";

const recommendBg = require("../../assets/images/home/recommend_bg.jpg");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: "pop",
      banner: [],
      recommend: [],
      pop: {page: 1, list: []},
      new: {page: 1, list: []},
      sell: {page: 1, list: []},
      tabFixed: false,
      toTopIsShow: false
    };
    this.titles = [
      {type: "pop", title: "流行"},
      {type: "new", title: "新款"},
      {type: "sell", title: "精选"}
    ];
    this.topBarCenterList = ["购物街"];
    this.topBarBgColor = "lightpink";
    this.probeType = 3;
    this.pullUpLoad = true;
    this.tabControlTop = 0;
    this.scroll = React.createRef();
    this.tabControlDom = React.createRef();
    this.tabControlA = React.createRef();
    this.tabControlB = React.createRef();
  }

  componentDidMount() {
    this.getMultidata.call(this);
    this.getGoodsList.call(this, "pop", 1);
    this.getGoodsList.call(this, "new", 1);
    this.getGoodsList.call(this, "sell", 1);
  }

  getMultidata() {
    getMultidata().then(res => {
      console.log(res);
      this.setState({
        banner: res.data.data.banner.list,
        recommend: res.data.data.recommend.list
      })
    })
  }

  getGoodsList(type, page) {
    getGoodsList(type, page).then(res => {
      this.setState((prevState) => ({
        [type]: {
          list: [...prevState[type].list, ...res.data.data.list],
          page: prevState[type].page + 1
        }
      }))
    })
  }

  changeProductType(type, index) {
    this.tabControlA.current.changeIndex(index);
    this.tabControlB.current.changeIndex(index);

    this.setState({
      activeType: type
    })
  }

  sliderImageLoad() {
    this.tabControlTop = this.tabControlDom.offsetTop;
  }

  watchPosition(position) {
    const {x, y} = position;
    if(-y >= this.tabControlTop - 45 && this.state.tabFixed === false) {
      this.setState({
        tabFixed: true
      })
    }else if(-y < this.tabControlTop - 45 && this.state.tabFixed === true) {
      this.setState({
        tabFixed: false
      })
    }

    if(-y >= 1000 && this.state.toTopIsShow === false) {
      this.setState({
        toTopIsShow: true
      })
    }else if(-y < 1000 && this.state.toTopIsShow === true) {
      this.setState({
        toTopIsShow: false
      })
    }
  }

  handlePullUp() {
    this.getGoodsList.call(this, this.state.activeType, this.state[this.state.activeType].page);
  }

  handleToTop() {
    this.scroll.current.scrollTo(0, 0, 1000);
  }

  refresh() {
    this.scroll.current.refresh();
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className={`fixedTab ${this.state.tabFixed ? "show" : "hide"}`}><TabControl ref={this.tabControlB} titles={this.titles} changeProductType={this.changeProductType.bind(this)}/></div>
        <TopBar centerList={this.topBarCenterList} bgColor={this.topBarBgColor}/>
        <Scroll ref={this.scroll} probeType={this.probeType} pullUpLoad={this.pullUpLoad} handlePullUp={this.handlePullUp.bind(this)} watchPosition={this.watchPosition.bind(this)}>
          <Slider list={this.state.banner} sliderImageLoad={this.sliderImageLoad.bind(this)}/>
          <div className="recommend-box">
            {
              this.state.recommend.map((item) => (
                <div className="recommend-item" key={item.acm}>
                  <img src={item.image} alt="" onLoad={() => {
                    this.scroll.current.refresh();
                  }}/>
                  <p className="text">{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className="pop-box">
            <img src={recommendBg} alt=""/>
          </div>
          <div><TabControl ref={this.tabControlA} tabControlRef={r => this.tabControlDom = r} titles={this.titles} changeProductType={this.changeProductType.bind(this)}/></div>
          <GoodsBox goodsList={this.state[this.state.activeType].list} refresh={this.refresh.bind(this)}/>
        </Scroll>
        <div className={`totop-box ${this.state.toTopIsShow ? "show" : "hide"}`}>
          <ToTop handleToTop={this.handleToTop.bind(this)}/>
        </div>
      </div>
    )
  }

}

export default Home;
