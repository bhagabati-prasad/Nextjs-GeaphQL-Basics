import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    phone: Float
    age: Int
  }
  type Query {
    hello: String
    users: [User]
    singleUser(id: ID): User
  }
`;

export default typeDefs;
