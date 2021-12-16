import http from "../../http"
export function entProduct(data) {
    return http({
        url: 'api/user/v1/saas/ent/basic/info/structure',
        method: 'get',
    })
}