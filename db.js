// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432, // Default PostgreSQL port
//   database: 'demo',
//   username: 'postgres',
//   password: 'AApatil@291994*',
// });

// async function checkDatabaseConnectivity() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     // Remember to close the connection after checking connectivity
//     await sequelize.close();
//   }
// }

// checkDatabaseConnectivity();