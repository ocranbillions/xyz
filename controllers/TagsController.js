import models from '../database/models';
import ServerResponse from '../modules/ServerResponse';

const {
  Article,
  Sequelize: { Op },
} = models;
const { successResponse } = ServerResponse;

/**
 *
 *
 * @export
 * @class TagsController
 */
export default class TagsController {
  /**
   *
   *
   * @static
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   * @returns {array} array of tags
   *
   * @memberof TagsController
   */
  static async getTags(req, res, next) {
    try {
      const articles = await Article.findAll({
        attributes: ['tagsList'],
        where: {
          tagsList: { [Op.ne]: null }
        }
      });

      let tagsArray = [];
      articles.forEach((article) => {
        tagsArray = tagsArray.concat(article.tagsList);
      });

      // Remove duplicates
      const allTags = [...new Set(tagsArray)];

      return successResponse(res, 200, 'tags', allTags);
    } catch (err) {
      return next(err);
    }
  }
}
