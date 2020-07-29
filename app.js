const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const isAuth= require("./middleware/is-auth")

const mongoose = require("mongoose");
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolver=require('./graphql/resolver/index')
app.use(bodyParser.json());
// 13
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next();
})
app.use(isAuth);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    //Resolver
    rootValue: graphQlResolver,
    graphiql: true
  })
);

mongoose
  .connect(
<<<<<<< HEAD
    `mongodb+srv://admin:YYCsHJqtO7fImCHr@cluster0.qr2ca.mongodb.net/data?retryWrites=true&w=majority`

=======
    `mongodb+srv://admin:YYCsHJqtO7fImCHr@cluster0.qr2ca.mongodb.net/datashop?retryWrites=true&w=majority`
>>>>>>> c21027c385e232919e47e3886c6a9b646a8ef39b
  )
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
