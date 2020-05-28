import React from "react";
import propTypes from "prop-types";

import "./TabControl.styl";

class TabControl extends React.Component {
  static defaultProps = {
    titles: [],
    changeProductType: () => {}
  };

  static propTypes = {
    titles: propTypes.array,
    changeProductType: propTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  changeType(index, type) {
    this.props.changeProductType(type, index);
  }

  changeIndex(index) {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div className="tabcontrol-wrapper" ref={this.props.tabControlRef}>
        {
          this.props.titles.map((item, index) => (
            <div className="tab-item" key={item.title} onClick={this.changeType.bind(this, index, item.type)}>
              <span className={`tab-text ${this.state.activeIndex === index ? "active" : ""}`}>{item.title}</span>
            </div>
          ))
        }
      </div>
    )
  }

}

export default TabControl;
