import Mock from 'mockjs';
//模拟延迟
Mock.setup({
    timeout:500
})
Mock.mock('api/user/v1/saas/ent/basic/info/structure', { "status": { "code": "00000", "msg": "操作成功" }, "data": { "entName": "比亚迪总公司", "unitNatureId": "4", "socialCreditCode": "1234567890ggggg", "dischargePermitCode": "", "legalRepresentative": "xiaoA", "entIndustryId": "C,13,131,1314", "entIndustryName": "制造业/农副食品加工业/谷物磨制/杂粮加工", "registerDate": 1633158683000, "registeredCapital": "10000", "registerAddress": "注册地址", "provinceCode": "33", "cityCode": "3301", "districtCode": "330106", "address": "测试详细地址", "postalCode": "010100", "contactAddress": "通讯地址", "profile": "简介", "contactName": null, "contactJob": null, "contactFixedPhone": "11111111111111111111", "contactMobilePhone": null, "contactEmail": null } })
export default Mock