import React from "react";
import propTypes from "prop-types";

import "./TopBar.styl";

class TopBar extends React.Component {
  static defaultProps = {
    left: null,
    center: null,
    right: null
  };

  static propTypes = {
    left: propTypes.element,
    center: propTypes.element,
    right: propTypes.element
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="topbar-wrapper">
        <div className="topbar-left">
          {this.props.left}
        </div>
        <div className="topbar-center">
          {this.props.center}
        </div>
        <div className="topbar-right">
          {this.props.right}
        </div>
      </div>
    )
  }

}

export default TopBar;
