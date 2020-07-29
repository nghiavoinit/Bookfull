const OrderResolver = require("./order");
const ProductResolver = require("./product");
const userResolver = require("./user");

const rootResolver = {
  ...OrderResolver,
  ...ProductResolver,
  ...userResolver,
};
module.exports = rootResolver;
