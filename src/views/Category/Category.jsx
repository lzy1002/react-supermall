import React from "react";

import "./Category.styl";

import {getCategoryData, getSubCategoryData, getSubCategoryDetail} from "../../api/category.js";

import TopBar from "../../components/content/TopBar/TopBar.jsx";
import CategoryLeft from "../../components/content/CategoryLeft/CategoryLeft.jsx";
import CategoryRight from "../../components/content/CategoryRight/CategoryRight.jsx";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],
      subCategoryList: [],
      subCategoryDetail: {
        pop: [],
        new: [],
        sell: []
      }
    };

    this.categoryRight = React.createRef();
  }

  componentDidMount() {
    this.getCategoryData.call(this);
  }

  getCategoryData() {
    getCategoryData().then(res => {
      console.log(res);
      this.setState({
        categoryList: res.data.data.category.list
      });
      this.getSubCategoryData.call(this, this.state.categoryList[0].maitKey);
      this.getSubCategoryDetail.call(this, this.state.categoryList[0].miniWallkey, "pop");
      this.getSubCategoryDetail.call(this, this.state.categoryList[0].miniWallkey, "new");
      this.getSubCategoryDetail.call(this, this.state.categoryList[0].miniWallkey, "sell");
    })
  }

  getSubCategoryData(maitKey) {
    getSubCategoryData(maitKey).then(res => {
      console.log(res);
      this.setState({
        subCategoryList: res.data.data.list
      });
      console.log(this.state.subCategoryList);
    })
  }

  getSubCategoryDetail(miniWallkey, type) {
    getSubCategoryDetail(miniWallkey, type).then(res => {
      console.log(res);
      this.setState({
        subCategoryDetail: {
          ...this.state.subCategoryDetail,
          [type]: res.data
        }
      });
    })
  }

  handleChangeType(maitKey, miniWallkey) {
    this.getSubCategoryData(maitKey);
    this.getSubCategoryDetail(miniWallkey, "pop");
    this.getSubCategoryDetail(miniWallkey, "new");
    this.getSubCategoryDetail(miniWallkey, "sell");
    this.categoryRight.current.scrollToTop();
  }

  render() {
    return (
      <div className="category-wrapper">
        <TopBar centerList={["商品分类"]} bgColor="lightpink"/>
        <div className="category-box">
          <CategoryLeft categoryList={this.state.categoryList} changeType={this.handleChangeType.bind(this)}/>
          <CategoryRight ref={this.categoryRight} subCategoryList={this.state.subCategoryList} subCategoryDetail={this.state.subCategoryDetail}/>
        </div>
      </div>
    )
  }

}

export default Category;
