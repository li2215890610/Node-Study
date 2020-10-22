const OrderModel = require("./model/order")
const OrderItemModel = require("./model/orderItem")

//查询 order_item 找出商品名称是 酸奶的商品，酸奶这个商品对应的订单的订单号，以及订单的总价格

//第一种方式
/**
OrderItemModel.find({"title":"酸奶"},(err,docs)=>{
  if (err) {
    console.log(err);
    return 
  }

  console.log(docs[0].order_id);
  OrderModel.find({"order_id":docs[0].order_id},(err,order)=>{
    if (err) {
      console.log(err);
      return 
    }

    console.log(order);
  })

})
* */

//第二种方式
/** 
*/
OrderItemModel.aggregate([
  {
    $lookup:{
      from: "order",
      localField: "order_id", //主表信息id
      foreignField: "order_id", //关联表信息id
      as: "order_info"
    },
  },
  {
    $match:{
      "title":"酸奶"
    }
  }
],(err,docs)=>{
  if (err) {
    console.log(err);
    return
  }

  console.log(docs,"aggregate");
})
