import * as express from "express";
import * as bodyParser from "body-parser";
import * as expressGraphQL from "express-graphql";
import * as logger from "morgan";
import * as cors from "cors";

import schema from "./graphQL/schema";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(routes);

app.use(
    "/api/graphql",
    expressGraphQL({
        schema,
        graphiql: true,
    })
);

export default app;
