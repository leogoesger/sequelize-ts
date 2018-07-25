import { Request, Response } from "express";
import { Climb, Location } from "../models";

const methods = {
    getCountries: async (req: Request, res: Response) => {
        const country = await Location.findAll({
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
        res.status(200).send(country);
    },
    getCountry: async (req: Request, res: Response) => {
        const country = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "states",
                    include: [{ model: Location, as: "regions" }],
                },
            ],
        });
        res.status(200).send(country);
    },
    getState: async (req: Request, res: Response) => {
        const state = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "regions",
                    include: [{ model: Location, as: "places" }],
                },
            ],
        });
        res.status(200).send(state);
    },
    getRegion: async (req: Request, res: Response) => {
        const region = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "places",
                    include: [{ model: Location, as: "areas" }],
                },
            ],
        });
        res.status(200).send(region);
    },
    getPlace: async (req: Request, res: Response) => {
        const place = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "areas",
                    include: [{ model: Location, as: "sections" }],
                },
            ],
        });
        res.status(200).send(place);
    },
    getArea: async (req: Request, res: Response) => {
        const area = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "sections",
                    include: [{ model: Climb, as: "climbs" }],
                },
            ],
        });
        res.status(200).send(area);
    },
    getSection: async (req: Request, res: Response) => {
        const section = await Location.findById(req.params.id, {
            include: [
                {
                    model: Location,
                    as: "climbs",
                },
            ],
        });
        res.status(200).send(section);
    },
};

export default methods;
