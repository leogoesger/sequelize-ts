import services from "./services";

interface IArg {
    id: number;
}

const locationQueries = {
    getCountries: () => services.getCountries(),

    getCountry: (_: any, { id }: IArg) => services.getCountry(id),

    getState: (_: any, { id }: IArg) => services.getState(id),

    getRegion: (_: any, { id }: IArg) => services.getRegion(id),

    getPlace: (_: any, { id }: IArg) => services.getPlace(id),

    getArea: (_: any, { id }: IArg) => services.getArea(id),

    getSection: (_: any, { id }: IArg) => services.getSection(id),
};

export default locationQueries;
