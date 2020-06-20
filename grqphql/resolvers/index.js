const userlistResolvers = require("./userlist");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...userlistResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
