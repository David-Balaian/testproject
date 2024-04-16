// schema.js
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        // Implement your DynamoDB query here
        // Fetch user data based on the provided ID
        // Return the user object
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
