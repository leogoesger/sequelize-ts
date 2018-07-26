import services from "./services";

interface IArg {
    id: number;
}

const climbQueries = {
    getClimbs: () => services.getClimbs(),
    getClimb: (parentValue: any, { id }: IArg) => services.getClimb(id),
};

export default climbQueries;
