import React from "react";
import propTypes from "prop-types";
import BScroll from "better-scroll";

class Scroll extends React.Component {
  static defaultProps = {
    probeType: 0,
    click: true,
    pullUpLoad: false,
    watchPosition: () => {},
    handlePullUp: () => {}
  };

  static propTypes = {
    probeType: propTypes.number,
    click: propTypes.bool,
    pullUpLoad: propTypes.bool,
    watchPosition: propTypes.func,
    handlePullUp: propTypes.func
  };

  constructor(props) {
    super(props);
    this.wrapper = React.createRef();

  }

  componentDidMount() {
    this.scroll = new BScroll(this.wrapper.current, {
      probeType: this.props.probeType,
      click: this.props.click,
      pullUpLoad: this.props.pullUpLoad
    });

    if(this.props.probeType >= 2) {
      this.scroll.on("scroll", (position) => {
        this.props.watchPosition(position);
      });
    }

    if(this.props.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.props.handlePullUp();
        this.scroll.finishPullUp();
      })
    }

  }

  componentDidUpdate() {
    window.setTimeout(() => {
      this.refresh.call(this);
    }, 20);
  }

  refresh() {
    window.clearTimeout(this.timeId);
    this.timeId = window.setTimeout(() => {
      this.scroll.refresh();
    }, 300);
  }

  scrollTo() {
    this.scroll.scrollTo(...arguments);
  }

  render() {
    return (
      <div className="wrapper" ref={this.wrapper} style={{width: "100%", height: "100%", overflow: "hidden"}}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Scroll;
