import { GraphQLSchema } from "graphql";

import RootQueryType from "./queries";
import MutationType from "./mutations";

const schema = new GraphQLSchema({
    query: RootQueryType,
    // mutation: MutationType,
});

export default schema;
