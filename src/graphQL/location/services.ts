import { Climb, Location } from "../../models";

const generateOption = (arg1: string, arg2: string) => ({
    include: [
        {
            model: Location,
            as: arg1,
            include: [{ model: Location, as: arg2 }],
        },
    ],
});

const services = {
    getCountries: () => {
        return Location.findAll({
            where: {
                type: "COUNTRY",
            },
            include: [
                {
                    model: Location,
                    as: "states",
                },
            ],
        });
    },
    getCountry: (id: number) => {
        return Location.findById(id, generateOption("states", "regions"));
    },
    getState: (id: number) => {
        return Location.findById(id, generateOption("regions", "places"));
    },
    getRegion: (id: number) => {
        return Location.findById(id, generateOption("places", "areas"));
    },
    getPlace: (id: number) => {
        return Location.findById(id, generateOption("areas", "sections"));
    },
    getArea: (id: number) => {
        return Location.findById(id, generateOption("sections", "climbs"));
    },
    getSection: (id: number) => {
        return Location.findById(id, {
            include: [
                {
                    model: Climb,
                    as: "climbs",
                },
            ],
        });
    },
};

export default services;
