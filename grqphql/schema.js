const { gql } = require("apollo-server-express");

module.exports = gql(`
  type Userlist{
    username:String!
  }
  type User{
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getUsers: [Userlist]
  }
  type Mutation{
    register(registerInput: RegisterInput):User!
    login(username:String!,password:String!):User!
  }
`);
