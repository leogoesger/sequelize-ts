import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

import services from "./services";
import {
    CountryType,
    StateType,
    RegionType,
    PlaceType,
    AreaType,
    SectionType,
} from "./types";

interface IArg {
    id: number;
}
const userQueries = {
    getCountries: {
        type: new GraphQLList(CountryType),
        resolve() {
            return services.getCountries();
        },
    },
    getCountry: {
        type: StateType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getCountry(id);
        },
    },
    getState: {
        type: StateType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getState(id);
        },
    },
    getRegion: {
        type: RegionType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getRegion(id);
        },
    },
    getPlace: {
        type: PlaceType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getPlace(id);
        },
    },
    getArea: {
        type: AreaType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getArea(id);
        },
    },
    getSection: {
        type: SectionType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getSection(id);
        },
    },
};

export default userQueries;
