import React from "react";

import "./Profile.styl";

import TopBar from "../../components/content/TopBar/TopBar.jsx";

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="profile-wrapper">
        <TopBar centerList={["我的"]} bgColor="lightpink"/>
        <div className="user-box">
          <div className="user-content">
            <p className="login">登录/注册</p>
            <p className="mobile">用户暂无绑定手机号</p>
          </div>
          <div className="arrow"></div>
        </div>
        <div className="my-box">
          <div className="my-item">
            <p>0.00元</p>
            <p className="text">我的余额</p>
          </div>
          <div className="my-item">
            <p>0个</p>
            <p className="text">我的优惠</p>
          </div>
          <div className="my-item">
            <p>0个</p>
            <p className="text">我的积分</p>
          </div>
        </div>
        <div className="option-top">
          <div className="option-top-item">我的消息</div>
          <div className="option-top-item">积分商城</div>
          <div className="option-top-item">会员卡</div>
        </div>
        <div className="option-bottom">
          <div className="option-bottom-item">我的购物车</div>
          <div className="option-bottom-item">下载App</div>
        </div>

      </div>
    )
  }

}

export default Profile;
