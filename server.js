var http = require('http');//引入HTTP包
var url = require('url');
var USERS = [{
    username: 'wl1702',
    password: '123456'
}];
http.createServer(function (request, response) {
    //解析请求，包括文件名

    var pathname = url.parse(request.url).pathname;
    // console.log("请求消息" + pathname + "收到");
    // console.log("请求类型" + request.method.toUpperCase());
    if (pathname == '/login') {
        if (request.method.toUpperCase() != 'GET') {
            var postdata = '';          //postdata表示用户提交上来的数据
            request.addListener('data', function (data) {  //当收到data事件的时候，将data添加到postdata
                postdata += data;
            });
            request.addListener('end', function () {
                console.log(postdata);
                var user = JSON.parse(postdata);
                response.writeHead(200, {
                    'Content-Type': 'application/json',//返回类型
                    'Access-Control-Allow-Origin': '*'   //允许跨域访问
                });
                if (user.username === USERS[0].username &&
                    user.password === USERS[0].password) {
                    //  && user.pin === MOCK_DATA[0].pin
                    // response.writeHead(200, {
                    //     'Content-Type': 'application/json',//返回类型
                    //     'Access-Control-Allow-Origin': '*'   //允许跨域访问
                    // });

                    response.write('{"success":true,"errrorCode":0}');   //成功则返回{"success":true,"errrorCode":0}对象
                }
                else {
                    response.write('{"success":false,"errrorCode":100}');//失败则返回{"success":false,"errrorCode":100}对象
                }
                response.end();
            });
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'application/json',//返回类型
                'Access-Control-Allow-Origin': '*'
            });
            response.write(JSON.stringify(USERS));
            response.end();
        }
    }
    else {
        response.write("Hello,it's my web server!");
        response.end();

    }
}).listen(8086);
console.log("启动web服务器，监听8086端口！");