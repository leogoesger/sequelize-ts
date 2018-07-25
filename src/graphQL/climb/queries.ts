import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

import ClimbType from "./type";
import services from "./services";

interface IArg {
    id: number;
}

const climbQueries = {
    getClimbs: {
        type: new GraphQLList(ClimbType),
        resolve() {
            return services.getClimbs();
        },
    },

    getClimb: {
        type: ClimbType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getClimb(id);
        },
    },
};

export default climbQueries;
