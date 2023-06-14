const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    dob: String
    password: String
  }

  type Query {
    getUser(email: String): User
  }
`;

module.exports = typeDefs;
