// import { IResolvers } from 'apollo-server';


interface Joke {
  id: string
  value: string
  icon_url: string
  url: string
  created_at: string
  updated_at: string
}

// const toggleSelectRepository = (_, { id, isSelected }, { cache }) => {
//   ...
// };

// const getJokeByCategory = (parent:any, { category }, { dataSources }, info:any): Joke => {
const getJokeByCategory = async (_: any, args: any, context:any): Promise<Joke> => {
  const { category } = args;
  // return {
  //   // "categories": [
      
  //   // ],
  //   id: "4PWCdNDwTvCseDFCALGDfA",
  //   value: "People have often asked the United States, \"What is your secret weapon against terrorists?\" We simply reply, \"Chuck Norris.\"",
  //   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //   url: "https://api.chucknorris.io/jokes/4PWCdNDwTvCseDFCALGDfA",
  //   created_at: "2020-01-05 13:42:28.420821",
  //   updated_at: "2020-01-05 13:42:28.420821"
  // }
  const response = await context.dataSources.jokesAPI.getJokeByCategory(category)
  return response
}


// launch: (_, { id }, { dataSources }) =>
//       dataSources.launchAPI.getLaunchById({ launchId: id }),

// me: async (_, __, { dataSources }) =>
// dataSources.userAPI.findOrCreateUser(),


const getJokeCategories = async (parent:any, args:any, context:any, info:any): Promise<string[]> => {

  const response = await context.dataSources.jokesAPI.getJokeCategories()

  return response;
}


export default {
  Query: {
    getJokeByCategory,
    getJokeCategories
  },
};