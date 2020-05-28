import React from "react";
import propTypes from "prop-types";
import Swiper from "swiper";

import "swiper/css/swiper.css";

class Slider extends React.Component {
  static defaultProps = {
    list: [],
    swiperHeight: "auto",
    sliderImageLoad: () => {}
  };
  
  static propTypes = {
    list: propTypes.array.isRequired,
    swiperHeight: propTypes.string,
    sliderImageLoad: propTypes.func
  };
  
  constructor(props) {
    super(props);

    this.swiperRef = React.createRef();
  }

  componentWillMount() {
    if(this.swiper) {
      this.swiper.destroy();
    }
  }

  componentDidUpdate() {
    if(this.swiper) {
      this.swiper.destroy();
    }
    this.initSwiper();
  }

  initSwiper = () => {
    this.swiper = new Swiper(this.swiperRef.current, {
      autoPlay: true,
      delay: 3000,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  };

  imageLoad(index) {
    if(index === this.props.list.length - 1) {
      this.props.sliderImageLoad();
    }
  }

  render() {
    return (
      <div className="swiper-container" ref={this.swiperRef} style={{height: this.props.swiperHeight}}>
        <div className="swiper-wrapper">
          {
            this.props.list.map((item, index) => {
              return (
                <div className="swiper-slide" key={item.acm || item}>
                  <img src={item.image || item} alt="" style={{width: "100%"}} onLoad={this.imageLoad.bind(this, index)}/>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }

}

export default Slider;
