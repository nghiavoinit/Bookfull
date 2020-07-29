const Product = require("../../models/product");
const Order = require("../../models/order");
const { dateToString } = require("../../helper/date");
const User = require("../../models/user");

const singleProduct = async (productId) => {
  try {
    const product = await Product.findById(productId);

    return {
      ...product._doc,
      _id: product.id,
      creator: user.bind(this, product.creator),
    };
  } catch (err) {
    throw err;
  }
};
const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdProduct: products.bind(this, user._doc.createdProducts),
    };
  } catch (err) {
    throw err;
  }
};
const products = async (productIds) => {
  try {
    const products = await Product.find({ _id: { $in: productIds } });
    return products.map((product) => {
      return {
        ...product._doc,
        _id: product.id,
        date: dateToString(product._doc.date),
        creator: user.bind(this, product.creator),
      };
    });
  } catch (err) {
    throw err;
  }
};
const returnOrder = (order) => {
  return {
    ...order.doc,
    _id: order.id,
    user: user.bind(this, order._doc.user),
    product: singleProduct.bind(this, order._doc.product),
    createdAt: dateToString(order._doc.createdAt),
    updatedAt: dateToString(order._doc.updatedAt),
  };
};
const returnProduct = (product) => {
  return {
    ...product._doc,
    _id: product.id,
    date: product._doc.date.toISOString(),
    creator: user.bind(this, product.creator),
  };
};

exports.returnOrder = returnOrder;
exports.returnProduct = returnProduct;
