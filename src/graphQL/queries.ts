import { GraphQLObjectType } from "graphql";

import locationQueries from "./location/queries";
import climbQueries from "./climb/queries";
import bookQueries from "./book/queries";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        ...bookQueries,
        ...climbQueries,
        ...locationQueries,
    }),
});

export default RootQuery;
