import React from "react";
import propTypes from "prop-types";

import "./TopBar.styl";

class TopBar extends React.Component {
  static defaultProps = {
    left: null,
    centerList: [],
    right: null,
    bgColor: "#fff",
    textColor: "#fff",
    pageMove: () => {},
    activeIndex: -1
  };

  static propTypes = {
    left: propTypes.element,
    centerList: propTypes.array,
    right: propTypes.element,
    bgColor: propTypes.string,
    textColor: propTypes.string,
    pageMove: propTypes.func,
    activeIndex: propTypes.number
  };

  constructor(props) {
    super(props);

  }

  handleCenterItemClick(index) {
    this.props.pageMove(index);
  }

  render() {
    return (
      <div className="topbar-wrapper" style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
        <div className="topbar-left">
          {this.props.left}
        </div>
        <div className="topbar-center">
          {
            this.props.centerList.map((item, index) => (
              <div style={{color: this.props.activeIndex === index ? "lightpink" : ""}} key={item} onClick={this.handleCenterItemClick.bind(this, index)}>{item}</div>
            ))
          }
        </div>
        <div className="topbar-right">
          {this.props.right}
        </div>
      </div>
    )
  }

}

export default TopBar;
