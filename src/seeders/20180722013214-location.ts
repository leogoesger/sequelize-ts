"use strict";

import { locations } from "../seederData";

module.exports = {
    up: (queryInterface: any) => {
        return queryInterface.bulkInsert("Location", locations);
    },
    down: (queryInterface: any) => {
        return queryInterface.bulkDelete("Location");
    },
};
