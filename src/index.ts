/* tslint:disable:no-console */
import { createServer } from "http";

import app from "./app";
import sequelize from "./sequelize";
import { Book, Location } from "./models";

const port = process.env.PORT || 8081;

(async () => {
    await sequelize.addModels([Book, Location]);

    createServer(app).listen(port, () =>
        console.info(`Server running on port ${port}`)
    );
})();
