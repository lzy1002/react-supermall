export class Goods {
  constructor(goodsData) {
    this.title = goodsData.itemInfo.title;
    this.newPrice = goodsData.itemInfo.lowNowPrice;
    this.oldPrice = goodsData.itemInfo.lowPrice;
    this.columns = goodsData.columns;
    this.banner = goodsData.itemInfo.topImages;
    this.discountDesc = goodsData.itemInfo.discountDesc;
  }
}

export class GoodsParams {
  constructor(goodsParams) {
    this.info = goodsParams.info.set;
    this.rule = goodsParams.rule.tables[0];
  }
}

export class CartData {
  constructor(goodsData) {
    this.title = goodsData.itemInfo.title;
    this.detailInfo = goodsData.detailInfo.desc;
    this.image = goodsData.detailInfo.detailImage[0].list[0];
    this.price = parseFloat(goodsData.itemInfo.lowNowPrice);
    this.iid = goodsData.itemInfo.iid;
    this.count = 1;
    this.current = true;
  }
}
