/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    articleId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    articleSlug: {
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  Comment.associate = function(models) {
    Comment.hasMany(models.Like, {
      foreignKey: 'commentId',
      as: 'commentlike',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    Comment.hasMany(models.Report, {
      foreignKey: 'commentId',
      as: 'commentreport',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    Comment.belongsToMany(models.Comment, { // comment thread
      foreignKey: 'commentId',
      otherKey: 'subcommentId',
      as: 'childComments',
      through: 'CommentThread',
      timestamps: false,
    });
    Comment.belongsToMany(models.Comment, { // article comment
      foreignKey: 'subcommentId',
      otherKey: 'commentId',
      as: 'parentComments',
      through: 'CommentThread',
      timestamps: false,
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'commentOwner'
    });
  };
  return Comment;
};
