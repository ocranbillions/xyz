/* eslint-disable object-curly-newline */
// import sequelize from 'sequelize';
import models from '../db/models';
import util from '../helpers/utilities';

class ArticleController {
  static async fetchArticles(req, res) {
    const articles = await models.Articles.findAll();
    return res.status(200).json({
      status: 200,
      data: articles,
    });
  }

  static async createArticle(req, res) {
    try {
      const { title, body, userId } = req.body;
      const article = {
        userId,
        title,
        body,
      };

      const createdArticle = await models.Articles.create(article);

      console.log(createdArticle);
      return res.status(200).json({
        status: 200,
        data: article,
      });
    } catch (error) {
      console.log(error);
      return util.errorStatus(res, 500, 'server error');
    }
  }
}

export default ArticleController;
