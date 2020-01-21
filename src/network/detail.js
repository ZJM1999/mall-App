import{request} from './request'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class MoreDetail {
  constructor (itemInfo,columns,services){
    this.title = itemInfo.title
    this.nowPrice = itemInfo.lowNowPrice
    this.lowPrice = itemInfo.lowPrice
    this.color = itemInfo.discountBgColor
    this.columns1 = columns[0]
    this.columns2 = columns[1]
    this.columns3 = services[0].name
    this.icon1 = services[services.length-2].icon
    this.name1 = services[services.length-2].name
    this.icon2 = services[services.length-1].icon
    this.name2 = services[services.length-1].name
  }
}

export class shopInfo {
  constructor (shopInfo){
    this.score1 = shopInfo.score[0]
    this.score2 = shopInfo.score[1]
    this.score3 = shopInfo.score[2]
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.shopName = shopInfo.name
    this.goods = shopInfo.cGoods
    this.sell = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.image ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}