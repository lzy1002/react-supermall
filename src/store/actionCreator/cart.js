import * as TYPES from "../action-types.js";

export const addGoodsToCart = (goods) => {
  return {
    type: TYPES.ADD_GOODS_TO_CART,
    goods
  }
};
