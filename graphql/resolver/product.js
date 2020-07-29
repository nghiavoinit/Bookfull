const Product = require("../../models/product");
const User = require("../../models/user");
const { returnOrder, returnProduct } = require("./merge");
module.exports = {
  products: async () => {
    try {
      const products = await Product.find();
      return products.map((product) => {
        return returnProduct(product);
      });
    } catch (err) {
      throw err;
    }
  },

  createProduct: async (args, req) => {
  console.log(req.isAuth);
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    const product = new Product({
      title: args.productInput.title,
      description: args.productInput.description,
      price: +args.productInput.price,
      count: +args.productInput.count,
      img: args.productInput.img,
      date: new Date(args.productInput.date),
      creator: req.userId,
      inCart: false
    });

    let createdProduct;
    try {
      const result = await product.save();
      console.log(typeof result._doc.date);
      createdProduct = returnProduct(result);
      const creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User does no exist");
      }

  creator.createdProducts.push(product);
      await creator.save();
      return createdProduct;
    } catch (err) {
      throw err;
    }
  },
};
