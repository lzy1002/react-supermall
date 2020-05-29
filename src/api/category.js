import {request} from "./request.js";

export function getCategoryData() {
  return request({
    url: "/category"
  })
}

export function getSubCategoryData(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

export function getSubCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}
