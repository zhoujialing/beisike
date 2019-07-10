import request from "./http"
// console.dir(request)
// import axios from "axios"
// console.dir(axios);
// https://cnodejs.org
class Apis {
    getTopics() {
        return request({
            method: 'get',
            url: '/api/v1/topics',
        });
    }
    getItem() {
        return request({
            method: 'get',
            url: '/api/v1/topic/5433d5e4e737cbe96dcef312'
        });
    }
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    getIndexData() {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params:{
                "v":"1562741438965",
                "c":"NewIndexController",
                "m":"index"
            }
        });
    }
    testPost(){
        return request({
            method: 'post',
            url: '/user/12345',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
          });
    }

    // ?
}
export default new Apis();