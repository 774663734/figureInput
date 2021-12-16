import axios from 'axios';
import http from '../http';
export function logdinRes() {
    return http({
        url: 'api/sso/v2/doLogin',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: { "bnamespace": "B", "vbusername": "byd-d-admin", "vbpassword": "12345678", "company": "1605062229504510194", "enterpriseId": "1605062229504510194" }
    })
}
export function accountInfo() {
    return http({
        url: 'api/user/v1/ent/account/info',
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8"
    })
}

