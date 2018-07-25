import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLEnumType,
} from "graphql";

import ClimbType from "../climb/type";

const LocationEnumType = new GraphQLEnumType({
    name: "LocationEnumType",
    values: {
        COUNTRY: { value: 0 },
        STATE: { value: 1 },
        REGION: { value: 2 },
        PLACE: { value: 3 },
        AREA: { value: 4 },
        SECTION: { value: 5 },
    },
});

const CommonType = {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    geoCode: { type: GraphQLString },
    open: { type: GraphQLBoolean },
    type: { type: LocationEnumType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
};

const CountryType = new GraphQLObjectType({
    name: "CountryType",
    fields: () => ({
        ...CommonType,
        states: { type: new GraphQLList(StateType) },
    }),
});

const StateType = new GraphQLObjectType({
    name: "StateType",
    fields: () => ({
        ...CommonType,
        regions: { type: new GraphQLList(RegionType) },
    }),
});

const RegionType = new GraphQLObjectType({
    name: "RegionType",
    fields: () => ({
        ...CommonType,
        places: { type: new GraphQLList(PlaceType) },
    }),
});

const PlaceType = new GraphQLObjectType({
    name: "PlaceType",
    fields: () => ({
        ...CommonType,
        areas: { type: new GraphQLList(AreaType) },
    }),
});

const AreaType = new GraphQLObjectType({
    name: "AreaType",
    fields: () => ({
        ...CommonType,
        sections: { type: new GraphQLList(SectionType) },
    }),
});

const SectionType = new GraphQLObjectType({
    name: "SectionType",
    fields: () => ({
        ...CommonType,
        climbs: { type: new GraphQLList(ClimbType) },
    }),
});

export { CountryType, StateType, RegionType, PlaceType, AreaType, SectionType };
