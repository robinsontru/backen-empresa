import app from "./app.js";
import { sequelize } from "./src/db/database.js";
import './src/model/libroModel.js'

const port= process.env.PORT ||3001

async function main() {
    try {
        await sequelize.sync({ force: false });
        app.listen(port);
        console.log('el sistema esta escuchando el puerto http://localhost:3001/');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();