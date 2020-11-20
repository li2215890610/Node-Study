
exports.getPostData = function (ctx) {
    //原生node 获取post数据
    return new Promise(function (resolve, reject) {
        try {
            let str = '';
            ctx.req.on('data', function (chunk) {
                str += chunk;
            })

            ctx.req.on('end', function (chunk) {

                resolve(str)
            })

        } catch (err) {
            reject(err)
        }

    })

}