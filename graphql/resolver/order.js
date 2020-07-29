const Product = require("../../models/product");
const Order = require("../../models/order");

const { returnOrder, returnProduct } = require("./merge");

module.exports = {
//admin
  orders: async () => {
    try {
      const orders = await Order.find();
      return orders.map((order) => {
        return returnOrder(order);
      });
    } catch (err) {
      throw err;
    }
  },
  orderProduct: async (args, req) => {

    const fetchProduct = await Product.findOne({ _id: args.productId });

    const order = new Order({
      user: "5f11936bde4afb2140a3c0f1",
      product: fetchProduct,
    });
    const result = await order.save();

    return returnOrder(result);
  },

  cancelOrder: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      const order = await Order.findById(args.orderId).populate("product");
      const product1 = returnProduct(order.product);
      await Order.deleteOne({ _id: args.orderId });
      return product1;
    } catch (err) {
      throw err;
    }
  },
};
