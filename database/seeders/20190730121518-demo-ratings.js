/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Ratings',
      [
        {
          rate: 5,
          userId: 1,
          articleId: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          rate: 2,
          userId: 2,
          articleId: 1,
          firstName: 'Jane',
          lastName: 'Doe',
        },
        {
          rate: 5,
          userId: 3,
          articleId: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          rate: 1,
          userId: 2,
          articleId: 3,
          firstName: 'John',
          lastName: 'Doe',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
