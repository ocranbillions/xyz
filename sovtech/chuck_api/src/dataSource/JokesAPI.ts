import { RESTDataSource } from 'apollo-datasource-rest'

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  // getCategories
  async getJokeCategories(): Promise<string[]> {
    const response = await this.get('categories');

    // transform the raw launches to a more friendly
    // return Array.isArray(response)
    //   ? response.map(launch => this.launchReducer(launch)) : [];

    return response; // any
  }


  async getJokeByCategory(category: string) {
    const response = await this.get(`random?category=${category.split(" ")[0]}`);

    // transform the raw launches to a more friendly
    // return Array.isArray(response)
    //   ? response.map(launch => this.launchReducer(launch)) : [];
    
    return response;
  }

}

// module.exports = JokesAPI;
export default JokesAPI;