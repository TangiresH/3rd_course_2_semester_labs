const express = require('express');
const mongoose = require("mongoose");
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./src/graphql/schema');
const graphqlResolver = require('./src/graphql/resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true
}));

mongoose
  .connect(
    "mongodb+srv://crazysparrow:564793@cluster0.8aeyxsx.mongodb.net/BE_lab6?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.log("DB error", err));