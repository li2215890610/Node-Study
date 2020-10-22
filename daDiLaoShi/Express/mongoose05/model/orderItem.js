
const mongoose = require('./db');

const OrderItemSchema = mongoose.Schema({
    //定义数据库表中的类型
    order_id: String,
    title: String,
    price: String,
    num: Number,
});

const OrderItemModel = mongoose.model("OrderItem",OrderItemSchema,"order_item");

module.exports = OrderItemModel;