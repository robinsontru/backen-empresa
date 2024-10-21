import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

const libros = sequelize.define('libro',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        timestamps: false,
    }
)
export default libros