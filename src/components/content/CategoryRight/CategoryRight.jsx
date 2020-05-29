import React from "react";
import propTypes from "prop-types";

import "./CategoryRight.styl";

import Scroll from "../../common/Scroll/Scroll.jsx";

import TabControl from "../TabControl/TabControl.jsx";
import GoodsBox from "../GoodsBox/GoodsBox.jsx";

class CategoryRight extends React.Component {
  static defaultProps = {
    subCategoryList: [],
    subCategoryDetail: {}
  };

  static propTypes = {
    subCategoryList: propTypes.array,
    subCategoryDetail: propTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      activeType: "pop"
    };

    this.tabControl = React.createRef();
    this.scroll = React.createRef();
  }

  changeProductType(type, index) {
    this.tabControl.current.changeIndex(index);
    this.setState({
      activeType: type
    })
  }

  refresh() {
    this.scroll.current.refresh();
  }

  scrollToTop() {
    this.scroll.current.scrollTo(0, 0, 0);
  }

  render() {
    return (
      <div className="categoryright-wrapper">
        <Scroll ref={this.scroll}>
          <div className="subcategory-box">
            {
              this.props.subCategoryList.map((item, index) => (
                <div key={item.acm} className="sub-item">
                  <img src={item.image} alt=""/>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <TabControl ref={this.tabControl} titles={[{title: "综合", type: "pop"}, {title: "新品", type: "new"}, {title: "销量", type: "sell"}]} changeProductType={this.changeProductType.bind(this)}/>
          <GoodsBox goodsList={this.props.subCategoryDetail[this.state.activeType]} refresh={this.refresh.bind(this)}/>

        </Scroll>
      </div>
    )
  }

}

export default CategoryRight;
