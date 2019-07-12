import request from "./http"
// console.dir(request)
// import axios from "axios"
// console.dir(axios);
// https://cnodejs.org
class Apis {
    
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    getIndexData() {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params: {
                "v": "1562741438965",
                "c": "NewIndexController",
                "m": "index"
            }
        });
    }
    testPhp() {
        // http://127.0.0.1/php/json.php
        return request({
            method: 'post',
            url: '/php/json.php',
            headers: {'Content-type': 'x-www-form-urlencoded'},
            data: {
                uname: 'Fred',
                upwd: '123456'
            },
        });

        // 是Get请求用params queryString params  不需要请求头
        // data 传默认  fromData
        // 设置请求头    application/x-www-form-urlencoded   Request payload  
        // $GET["xxxx"]

    }


}
export default new Apis();