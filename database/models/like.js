/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    articleId: {
      type: DataTypes.INTEGER
    },
    commentId: {
      type: DataTypes.INTEGER
    },
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};