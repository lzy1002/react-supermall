import * as TYPES from "../action-types.js";

export default (state = {cart: [], allChecked: false}, action) => {
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
    case TYPES.CHANGE_CURRENT_STATE: {
      const currentGoods = state.cart.find(item => item.iid === action.iid);
      currentGoods.current = !currentGoods.current;

      state.allChecked = state.cart.every(item => item.current);

      break;
    }
    case TYPES.INIT_ALL_INPUT_STATE: {
      if(state.cart.length === 0) {
        state.allChecked = false;
      }else {
        state.allChecked = state.cart.every(item => item.current);
      }
      break;
    }
    case TYPES.CHANGE_ALL_INPUT_STATE: {
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          item.current = !state.allChecked;
        });
        state.allChecked = state.cart.every(item => item.current);
      }

      break;
    }

  }

  return state;
}
