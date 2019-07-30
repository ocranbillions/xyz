import models from '../database/models';

/**
 * @class likeController
 * @exports likeController
 */
export default class likeController {
  /**
   *
   * @method likePost
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next
   * @returns {object} returns...
   */
  static async likeArticle(req, res, next) {
    try {
      const articleId = req.params.id;
      const userId = 2; // fetch this from token;
      
      // return article with slug or id not found


      await models.Like.destroy({ where: { userId, articleId, dislike: true } });
      const previousLike = await models.Like.findOne(
        { where: { userId, articleId, like: true } }
      );
      if (previousLike) {
        await models.Like.destroy({ where: { userId, articleId } });
        return res.status(200).json({
          message: 'like removed',
        });
      }

      const response = await models.Like.create(
        {
          articleId,
          userId,
          like: true,
          dislike: false,
        }
      );
      const { like, dislike } = response.dataValues;
      return res.status(200).json({
        message: `Article id ${articleId} was liked`,
        like,
        dislike,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   *
   * @method dislikePost
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next
   * @returns {object} returns...
   */
  static async dislikeArticle(req, res, next) {
    try {
      const articleId = req.params.id;
      const userId = 2; // fetch this from token;

      await models.Like.destroy({ where: { userId, articleId, like: true } });
      const previousDislike = await models.Like.findOne(
        { where: { userId, articleId, dislike: true } }
      );
      if (previousDislike) {
        await models.Like.destroy({ where: { userId, articleId } });
        return res.status(200).json({
          message: 'dislike removed',
        });
      }

      const response = await models.Like.create(
        {
          articleId,
          userId,
          like: false,
          dislike: true,
        }
      );
      const { like, dislike } = response.dataValues;
      return res.status(200).json({
        message: `Article id ${articleId} was disliked`,
        like,
        dislike,
      });
    } catch (error) {
      next(error);
    }
  }
}
