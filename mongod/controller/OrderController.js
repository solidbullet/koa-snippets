class OrderController {

    // 创建订单
     static async create(ctx) {
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
 
    ctx.body={
        url,
        req_query,
        req_queryString
    }
        console.log("body:",ctx.body)
     }
  
    // 更新订单
    static async update(ctx) {
     // await ……
    }
  
  }
  module.exports = OrderController
  