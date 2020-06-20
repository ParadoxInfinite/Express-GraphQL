const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./grqphql/schema");
const resolvers = require("./grqphql/resolvers");
const { MONGODB } = require("./keys.js");

const server = new ApolloServer({ typeDefs, resolvers });

var app = express();
server.applyMiddleware({ app });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTED");
    return app.listen(4000);
  })
  .then(() => {
    console.log("Running a GraphQL API server at localhost:4000/graphql");
  });
