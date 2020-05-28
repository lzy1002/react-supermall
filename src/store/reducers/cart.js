import * as TYPES from "../action-types.js";

export default (state = {cart: []}, action) => {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.ADD_GOODS_TO_CART: {
      const index = state.cart.findIndex(item => item.iid === action.goods.iid);
      if(index === -1) {
        state.cart.push(action.goods);
        console.log("商品添加到购物车中");
      }else {
        state.cart[index].count = state.cart[index].count + 1;
        console.log("商品数量+1");
      }
      break;
    }

  }

  return state;
}
