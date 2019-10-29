import qs from 'qs'
import {request} from "./request"

export function getCateGoods(type){
    return request({
        url:'/getmain.php',
        method:'post',
        data:qs.stringify({"keyflag" : "class","class" : type})
    })
}