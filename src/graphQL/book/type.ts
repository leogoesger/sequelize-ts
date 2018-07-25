import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
} from "graphql";

import ClimbType from "../climb/type";

const BookType = new GraphQLObjectType({
    name: "BookType",
    fields: () => ({
        title: { type: GraphQLString },
        publishedDate: { type: GraphQLString },
        available: { type: GraphQLBoolean },
        climbs: { type: new GraphQLList(ClimbType) },
    }),
});

export default BookType;
