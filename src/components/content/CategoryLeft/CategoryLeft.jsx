import React from "react";
import propTypes from "prop-types";

import "./CategoryLeft.styl";

import Scroll from "../../common/Scroll/Scroll.jsx";

class CategoryLeft extends React.Component {
  static defaultProps = {
    categoryList: [],
    changeType: () => {}
  };

  static propTypes = {
    categoryList: propTypes.array,
    changeType: propTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  handleItemClick(index, maitKey, miniWallkey) {
    this.setState({
      activeIndex: index
    });
    this.props.changeType(maitKey, miniWallkey);

  }

  render() {
    return (
      <div className="categoryleft-wrapper">
        <Scroll>
          {
            this.props.categoryList.map((item, index) => (
              <div className={`left-item ${index === this.state.activeIndex ? "active" : ""}`} key={item.maitKey} onClick={this.handleItemClick.bind(this, index, item.maitKey, item.miniWallkey)}>
                <span>{item.title}</span>
              </div>
            ))
          }
        </Scroll>
      </div>
    )
  }

}

export default CategoryLeft;
