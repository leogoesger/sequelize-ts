import { GraphQLObjectType } from "graphql";

import locationQueries from "./location/queries";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        ...locationQueries,
    }),
});

export default RootQuery;
