import * as TYPES from "../action-types.js";

export const addGoodsToCart = (goods) => {
  return {
    type: TYPES.ADD_GOODS_TO_CART,
    goods
  }
};

export const changeCurrentState = (iid) => {
  return {
    type: TYPES.CHANGE_CURRENT_STATE,
    iid
  }
};

export const initAllInputState = () => {
  return {
    type: TYPES.INIT_ALL_INPUT_STATE
  }
};

export const changeAllInputState = () => {
  return {
    type: TYPES.CHANGE_ALL_INPUT_STATE
  }
};
