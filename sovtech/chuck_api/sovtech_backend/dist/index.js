"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const JokesAPI_1 = __importDefault(require("./dataSource/JokesAPI"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    dataSources: () => ({
        jokesAPI: new JokesAPI_1.default(),
    })
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
    Server is running!
    🚀 Server ready at ${url}
    Query at https://studio.apollographql.com/dev
  `);
});
// /graphql
// error handler
