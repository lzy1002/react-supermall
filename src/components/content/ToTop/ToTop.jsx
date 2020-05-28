import React from "react";
import propTypes from "prop-types";

import "./ToTop.styl";

const toTopImg = require("../../../assets/images/common/top.png");

class ToTop extends React.Component {
  static defaultProps = {
    handleToTop: () => {}
  };

  static propTypes = {
    handleToTop: propTypes.func
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="totop-wrapper" onClick={() => {
        this.props.handleToTop();
      }}>
        <img src={toTopImg} alt=""/>
      </div>
    )
  }

}

export default ToTop;
