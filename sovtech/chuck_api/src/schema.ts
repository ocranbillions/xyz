import { gql } from 'apollo-server';

const typeDefs = gql`
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
`

export default typeDefs;

// getJokeCategories: [String!]! check exclamations

// type TripUpdateResponse {
//   success: Boolean!
//   message: String
//   launches: [Launch]
// }
