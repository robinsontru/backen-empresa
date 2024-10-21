import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('prueba12', 'postgres', 'root', {
    host: 'localhost',
    dialect:"postgres",
  });