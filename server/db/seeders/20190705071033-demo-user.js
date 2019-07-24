/* eslint-disable no-unused-vars */
import auth from '../../helpers/auth';

const passwordHash = auth.hashPassword('PassWord123..');

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@test.com',
        password: 'passwordHash',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@test.com',
        password: 'passwordHash',
      },
      {
        firstName: 'Mike',
        lastName: 'Jones',
        email: 'mikejones@test.com',
        password: 'passwordHash',
      },
      {
        firstName: 'Jane',
        lastName: 'Jones',
        email: 'janejones@test.com',
        password: 'passwordHash',
      },
    ],
    {},
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Users', null, {});
}
