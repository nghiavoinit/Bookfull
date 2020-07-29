const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Order{
    _id:ID!
    product:Product!
    user:User!
    createdAt:String!
    updatedAt:String!
}
 type Product{
     _id:ID!
     title:String!
     description: String!
     price:Float!
     count:Int!
     img:String!
     date: String!
     creator:User!
     inCart: Boolean!
 }
 type User{
     _id:ID!
     email:String!
     password:String
     createdProducts:[Product!]
 }
 type AuthData{
     userId:ID!
     token:String!
     tokenExpiration: Int!
 }
 input ProductInput{
     title:String!
     description: String!
     price:Float!
     img:String!
     count:Int!
     date: String!
     inCart: Boolean
 }
 input UserInput{
     email:String!
     password:String!
 }
 type RootQuery{
     products:[Product!]!
     orders:[Order!]!
     login(email: String!, password:String!):AuthData!
 }
 type RootMutation{
     createProduct(productInput:ProductInput):Product
     createUser(userInput:UserInput):User
    bookProduct(productId:ID!):Order!
    cancelOrder(orderId: ID!):Product!
    }
 
 schema{
     query:RootQuery
     mutation:RootMutation
 }
 
`);
