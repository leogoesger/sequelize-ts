import { Climb } from "../../models";

const services = {
    getClimbs: () => Climb.findAll(),
    getClimb: (id: number) => Climb.findById(id),
};

export default services;
