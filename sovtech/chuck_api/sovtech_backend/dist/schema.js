"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Query {
    """
    Test Message.
    """
    getJokeByCategory(category: String!): Joke!

    getJokeCategories: [String]!
  }

  type Joke {
    id: String!
    value: String!
    icon_url: String!
    url: String!
    created_at: String!
    updated_at: String!
  }
`;
exports.default = typeDefs;
// getJokeCategories: [String!]! check exclamations
// type TripUpdateResponse {
//   success: Boolean!
//   message: String
//   launches: [Launch]
// }
