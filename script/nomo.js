/*
Author：Hausd0rff
接收到验证码后，再开QX脚本去登陆
同步解锁 MONO RAW，需在APP里手动操作下
低调使用
[rewrite_local]
^https?:\/\/nomo\.dafork\.com\/api\/v3\/register\/phone_signin$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/nomo.js
[mitm]
hostname=nomo.dafork.com
/*


*/

var obj = JSON.parse($response.body);
    
obj.sign = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQ2NTAyMiwiYWNjZXNzX3Rva2VuIjoibUZnTFBSM3RrbzVzOEFSQ01DaWE1MHZOYzR2cTlHREQ2d3J5RWp1b1Y3OWNXZGJHVXlvMUlLeGRyeUt3SnV2NUpoRHJKanpxRFlCWkFIRm80TUN6cm9wdm1HTEN1NTJ4dkcteW43MU1aV3NEMlJ0STd2NUdwTWxTWlVCVmE3UXZ4c3JiS1ZmcHdoMWVOYVcxZ0k4T2FleWxiWE4zVWRlNGpPSzczVFlrT2RRU2J2MzFVMnpLckE1V1A5RHNTVU9OSGlyMmtPaDAiLCJwcm9kdWN0cyI6W10sInByb2R1Y3RfaW9zX2lkcyI6W10sImlzX3N1YnNjcmlwdGlvbl91c2VyIjp0cnVlLCJyZWNlaXZlZF9maWxtX2lkcyI6W10sInRpbWVzdGFtcCI6MTY0MjY4NDQ0NH0.wFmYYByii_2FMhmKDmo9K5fRz0zJEjElzaNs6mD4hU7ndtYUAQksh7Q37uqVnfS584iwUXsXTxc7_0NXbpVd2I9Sl6Fft8-ZmtvoecLyXk3QP15zATzzl7p0ykrIAbZum6B3KnDAQcCOjqypGI8RU2m-lXvrnHVqJUd7Uk3XOqcDEyEsVgfgZ3b5L7BOmvycDk6yNIDqptwKQ2R4gB_Zo8dYnPdaBn9an77kq3QDRSVHntmuVepfGgFpZQFG4PHsKO12jwqeu6C-gx_vGsqbAx9e2ywePxuVUhzdHzqWKHQAvfoYej11YlHRs1cjt8QLf-Ys5wx3DFJ-od_xRsSLZA";

$done({
        body : JSON.stringify(obj)
});
