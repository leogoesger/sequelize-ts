import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types";
import Query from "./queries";

export default makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query,
    },
});
