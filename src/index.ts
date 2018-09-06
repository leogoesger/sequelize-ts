/* tslint:disable:no-console */
import { createServer } from "http";

import app from "./app";

const port = process.env.PORT || 8080;

(async () => {
    createServer(app).listen(port, () =>
        console.info(`Server running on port ${port}`)
    );
})();
