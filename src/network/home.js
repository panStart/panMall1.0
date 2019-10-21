import qs from 'qs'
import {request} from "./request"
//轮播图图片获取
export function getHomeMultidata(){
    return request(
        {
            url:'/getmain.php',
            method:'post',
            data:qs.stringify({keyflag:'goodImg'})
        }
    )
}