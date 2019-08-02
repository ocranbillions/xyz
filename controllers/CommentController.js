import models from '../database/models';
import ServerResponse from '../modules';

const { successResponse, notFoundError, errorResponse } = ServerResponse;
/**
 * @class CommentController
 * @exports CommentController
 */
export default class CommentController {
  /**
   *
   * @method postComment
   * @description Posts a comment
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {fucntion} next
   * @returns {object} returns comment info
   * @memberof commentController
   */
  static async postComment(req, res, next) {
    try {
      const { body } = req.body;
      const { slug } = req.params;
      const userId = req.user.id;

      const article = await models.Article.findOne({ where: { slug } });
      if (!article) return notFoundError(req, res);

      if (article.dataValues.status === 'draft') return errorResponse(res, 405, 'cannot comment on a draft article');

      // Threaded comments
      if (req.query.commtId) {
        const parentCommentId = req.query.commtId;

        // get parent comment
        const parentComment = await models.Comment.findByPk(parentCommentId);

        // create new child comment
        const newChildComment = await models.Comment.create({
          body,
          userId,
          articleId: article.dataValues.id,
          articleSlug: slug,
          type: 'child'
        });

        // Associate father and son
        await parentComment.addChildComments(newChildComment);

        const children = await parentComment.getChildComments();

        const indexOfNewChild = children.length - 1;

        const newChild = children[indexOfNewChild];

        return successResponse(res, 201, { newChild });
      }

      // A direct comment of an article
      const articleComment = await models.Comment.create({
        body,
        userId,
        articleId: article.dataValues.id,
        articleSlug: slug,
        type: 'parent'
      });

      return successResponse(res, 201, articleComment.dataValues);
    } catch (error) {
      return next(error);
    }
  }

  /**
   *
   * @method getArticles
   * @description get all articles
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {fucntion} next
   * @returns {object} returns comment info
   * @memberof commentController
   */
  static async getArticles(req, res, next) {
    try {
      // Articles
      const articles = await models.Article.findAndCountAll({
        attributes: ['slug', 'body', 'description', 'readTime'],
        include: [
          // Article Author
          {
            model: models.User,
            as: 'author',
            attributes: ['firstName', 'lastName'],
          },
          // Article Comments
          {
            model: models.Comment,
            as: 'articlecomment',
            where: { type: 'parent' },
            attributes: ['id', 'body', 'createdAt'],
            include: [
              // CommentOwner
              {
                model: models.User,
                as: 'commentOwner',
                attributes: ['firstName', 'lastName'],
              },
              // Child Comments (Comment Thread)
              {
                model: models.Comment,
                as: 'childComments',
                attributes: ['body', 'createdAt'],
                include: [
                  // CommentOwner
                  {
                    model: models.User,
                    as: 'commentOwner',
                    attributes: ['firstName', 'lastName']
                  }
                ]
              }
            ]
          },
        ]
      });
      return successResponse(res, 200, articles);
    } catch (error) {
      return next(error);
    }
  }
}
