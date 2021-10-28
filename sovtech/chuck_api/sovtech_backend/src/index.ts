import { ApolloServer, IResolvers } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers'
import JokesAPI from './dataSource/JokesAPI'

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  // resolvers: resolvers as any,
  // resolvers: resolvers as IResolvers,
  dataSources: () => ({
    jokesAPI: new JokesAPI(),
  })
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    Server is running!
    🚀 Server ready at ${url}
    Query at https://studio.apollographql.com/dev
  `)
})


// /graphql
// error handler