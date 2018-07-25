import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLEnumType,
} from "graphql";

const ClimbEnumType = new GraphQLEnumType({
    name: "ClimbEnumType",
    values: {
        BOULDER: { value: 0 },
        SPORTS: { value: 1 },
        TRAD: { value: 2 },
    },
});

const CommonType = {
    name: { type: GraphQLString },
    grade: { type: GraphQLString },
    type: { type: ClimbEnumType },
    description: { type: GraphQLString },
    protection: { type: GraphQLBoolean },
    images: { type: new GraphQLList(GraphQLString) },
};

const ClimbType = new GraphQLObjectType({
    name: "ClimbType",
    fields: () => ({
        ...CommonType,
    }),
});

export default ClimbType;
