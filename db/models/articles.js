export default (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {});
  Articles.associate = (models) => {
    // associations can be defined here
    Articles.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Articles;
};
