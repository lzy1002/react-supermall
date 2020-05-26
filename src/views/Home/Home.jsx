import React from "react";

import "./Home.styl";

import {getMultidata, getGoodsList} from "../../api/home.js";

import Scroll from "../../components/common/Scroll/Scroll.jsx";

import TopBar from "../../components/content/TopBar/TopBar.jsx";
import Slider from "../../components/content/Slider/Slider.jsx";
import TabControl from "../../components/content/TabControl/TabControl.jsx";
import GoodsBox from "../../components/content/GoodsBox/GoodsBox.jsx";

const recommendBg = require("../../assets/images/home/recommend_bg.jpg");

export const {Provider, Consumer} = React.createContext();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: "pop",
      banner: [],
      recommend: [],
      pop: {page: 1, list: []},
      new: {page: 1, list: []},
      sell: {page: 1, list: []}
    };
    this.titles = [
      {type: "pop", title: "流行"},
      {type: "new", title: "新款"},
      {type: "sell", title: "精选"}
    ];
    this.probeType = 3;
    this.scroll = React.createRef();
    this.tabControlDom = React.createRef();
  }

  componentDidMount() {
    this.getMultidata.call(this);
    this.getGoodsList.call(this, "pop", 1);
    this.getGoodsList.call(this, "new", 1);
    this.getGoodsList.call(this, "sell", 1);
  }

  componentDidUpdate() {
    window.setTimeout(() => {
      this.tabControlTop = this.tabControlDom.offsetTop;
      console.log(this.tabControlTop);
    }, 20)

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

  changeProductType(type) {
    this.setState({
      activeType: type
    })
  }

  render() {
    let contextData = {
      refresh: () => {
        this.scroll.current.refresh();
      }
    };
    return (
      <Provider value={contextData}>
        <div className="home-wrapper">
          <TopBar center={<span>购物街</span>}/>
          <Scroll ref={this.scroll} probeType={this.probeType}>
            <Slider list={this.state.banner}/>
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
            <TabControl tabControlRef={r => this.tabControlDom = r} titles={this.titles} changeProductType={this.changeProductType.bind(this)}/>
            <GoodsBox goodsList={this.state[this.state.activeType].list}/>

          </Scroll>
        </div>
      </Provider>
    )
  }

}

export default Home;
