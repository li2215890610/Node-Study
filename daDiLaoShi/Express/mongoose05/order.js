const OrderModel = require("./model/order")
const OrderItemModel = require("./model/orderItem")

// const order = new OrderModel({
//   order_id: 3,
//   uid: 3,
//   trade_no: 3,
//   all_price: 40,
//   all_num: 4,
// })

// const findOrder = (cb) => {
//   OrderModel.find({}, (err, doc) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     cb(doc)
//   })
// }

// order 关联 order_item
//查询 order 数据

function findOrderAggregate() {

  // const orderItem = new OrderItemModel({
  //   order_id: 3,
  //   title: "商品4",
  //   price: 10,
  //   num: 1,
  // })

  // orderItem.save((err) => {
  //   if (err) {
  //     console.log(err);
  //     return
  //   }
  // })

  OrderModel.aggregate([
    {
      $lookup: {
        from: "order_item",
        localField: "order_id", //主表信息id
        foreignField: "order_id", //关联表信息id
        as: "Items"
      },
    }, {
      $match: {
        "all_price": {
          $gte: 30
        }
      }
    }
  ], (err, docs) => {
    if (err) {
      console.log(err);
      return
    }
    const newDocs = docs.map((data) => {
      console.log(JSON.stringify(data.Items));
      return {
        ...data,
        // Items: JSON.parse(data.Items)
      }
    })
    console.log(newDocs, "aggregate");
  })
}

findOrderAggregate()