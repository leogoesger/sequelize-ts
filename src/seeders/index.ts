import { sequelize } from "../sequelize";
sequelize.addModels(["../models"]);

import Person from "../models/Person";
import { persons } from "./seederData";

const Persons = Person.destroy({ where: {} }).then(() =>
    Person.bulkCreate(persons).then(() =>
        console.log(`${persons.length} Persons seeded...`)
    )
);

export default Promise.all([Persons]).then(() => process.exit(0));
