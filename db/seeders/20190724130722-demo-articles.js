/* eslint-disable no-unused-vars */
import auth from '../../helpers/auth';

const passwordHash = auth.hashPassword('PassWord123..');

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'Articles',
    [
      {
        title: 'John',
        body: 'Doe',
        userId: 2,
      },
      {
        title: 'John',
        body: 'Doe',
        userId: 2,
      },
    ],
    {},
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Articles', null, {});
}
