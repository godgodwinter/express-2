// // const mysql = require("mysql2");
// const connection = (module.exports = require("mysql").createConnection({
//   host: "localhost",
//   user: "root",
//   database: "psikotest-testing-0",
//   password: "",
// }));
// // connection.connect();
// // exports.connection = async () => {
// //   const connection = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     database: "psikotest-testing-0",
// //     password: "",
// //   });
// //   return connection;
// // };

import { Sequelize } from "sequelize";
const db = new Sequelize("psikotest-testing-0", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
