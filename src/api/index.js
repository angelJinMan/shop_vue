/*
包含n个接口请求函数的模块
 */
import ajax from './ajax.js'

/*** 获取地址信息(根据经纬度串) */
export function reqAddress=(geohash)=>ajax('/position/'+geohash)

/*获取食品分类列表*/
export function reqFoodList=()=>ajax('/index_category')

/*根据经纬度获取商铺列表*/
export function reqShopList=(latitude,longitude)=>ajax('/shops/',{latitude,longitude})
