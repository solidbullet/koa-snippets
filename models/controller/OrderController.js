require('../db/index');
var Order = require('../models/order.model');
class OrderController {

    // 创建订单
    static async create(ctx) {
        var order = new Order({
            title: 'milk',
            modality: '0123456789'
        });
        await order.save(function(err, doc) {
                if (err) {
                    console.log('save error:' + err);
                }

                console.log('save sucess \n' + doc);
            })
            // await ……
            // const { name } = ctx.request.body;
            // if(name){
            //     console.log(name)
            // }else{
            //     console.log("error!")
            // }
        let url = ctx.url;
        let request = ctx.request;
        let req_query = request.query;
        let req_queryString = request.queryString;

        ctx.body = {
            url,
            req_query,
            req_queryString
        }
        console.log("body:", ctx.body)
    }

    // 更新订单
    static async update(ctx) {
        // await ……
    }

}
module.exports = OrderController