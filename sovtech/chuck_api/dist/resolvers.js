"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const getJokeByCategory = (parent:any, { category }, { dataSources }, info:any): Joke => {
const getJokeByCategory = (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield context.dataSources.jokesAPI.getJokeByCategory(category);
    return response;
});
// launch: (_, { id }, { dataSources }) =>
//       dataSources.launchAPI.getLaunchById({ launchId: id }),
// me: async (_, __, { dataSources }) =>
// dataSources.userAPI.findOrCreateUser(),
const getJokeCategories = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield context.dataSources.jokesAPI.getJokeCategories();
    return response;
});
exports.default = {
    Query: {
        getJokeByCategory,
        getJokeCategories
    },
};
