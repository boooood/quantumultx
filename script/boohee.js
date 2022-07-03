/*

薄荷健康 unlock vip by 渤涵

[rewrite_local]
^http(s):\/\/.*\.boohee\.(com|cn)\/api\/v(1|2)\/(wisdom\/contracts\/status|users\/vip_status|vip_member) url script-response-body buehen0426/Scripts/boohee/boohee.js

[MITM]
hostname = *.boohee.com

*/

/*
re('"status":"unpaid"@"is_insider":false@"payed":0@"expired":0@"initial":0@vip_member":false@expired_at":"\\d{1,2}-\\d{1,2}_\\d{1,2}"@expired_at":"\\d{1,2}.\\d{1,2}.\\d{1,2}"@state":"expired"@remain_days":-\\d+@"is_member":false@"is_vip":false@is_auto_renew":false','"status":"on_going"@"is_insider":true@"payed":1@"expired":1673308878@"initial":1@vip_member":true@expired_at":2020-10-22@expired_at":2020.10.22@state":"ongoing"@remain_days":31@"is_member":true@"is_vip":true@is_auto_renew":true')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}

*/

const path1 = "/users/vip_status";
const path2 = "/vip_member";
const path3 = "/wisdom/contracts/status";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.is_member = true;
obj.remain_day = 365;
obj.expired_at = "2033-09-22";
obj.state = "on_going";
}

if ($request.url.indexOf(path2) != -1){
obj.vip_member = true;
obj.remain_days = 365;
obj.expired_at = "2033.09.22";
}

if ($request.url.indexOf(path3) != -1){
obj.data.status = "ongoing";
obj.data.end_time = "2033-09-22";
obj.data.begin_time = "2020-09-22";
obj.data.product_id = 33;
}



$done({body: JSON.stringify(obj)});