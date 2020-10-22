const mongoose = require('./db');

const OrderSchema = mongoose.Schema({
    //定义数据库表中的类型
    order_id: String,
    uid: String,
    trade_no: String,
    all_price: Number,
    all_num: Number,
});

const OrderModel = mongoose.model("Order",OrderSchema,"order");

module.exports = OrderModel;