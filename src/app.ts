import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cors from "cors";

import routes from "./routes";

const app = express();
app.use(cors());
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(routes);

export default app;
