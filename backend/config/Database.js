import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db', 'root', 'xxoneoct', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});

export default db;