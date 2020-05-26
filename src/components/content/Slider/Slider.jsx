import React from "react";
import propTypes from "prop-types";
import Swiper from "swiper";

import "swiper/css/swiper.css";

class Slider extends React.Component {
  static defaultProps = {
    list: []
  };
  
  static propTypes = {
    list: propTypes.array.isRequired
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

  render() {
    return (
      <div className="swiper-container" ref={this.swiperRef}>
        <div className="swiper-wrapper">
          {
            this.props.list.map((item) => {
              return (
                <div className="swiper-slide" key={item.acm}>
                  <img src={item.image} alt="" style={{width: "100%"}}/>
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
