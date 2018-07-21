import { createServer } from "http";
import app from "./app";
import { sequelize } from "./sequelize";

const port = process.env.PORT || 8081;

(async () => {
    await sequelize.sync({ force: true });

    createServer(app).listen(port, () =>
        console.info(`Server running on port ${port}`)
    );
})();