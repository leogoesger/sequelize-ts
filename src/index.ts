/* tslint:disable:no-console */
import { createServer } from "http";

import app from "./app";
import sequelize from "./sequelize";
import {
    Attempt,
    Author,
    AuthorBook,
    Book,
    BookClimb,
    Climb,
    Comment,
    Location,
    User,
    UserBook,
    UserClimb,
} from "./models";

const port = process.env.PORT || 8081;

(async () => {
    await sequelize.addModels([
        Attempt,
        Author,
        AuthorBook,
        Book,
        BookClimb,
        Climb,
        Comment,
        Location,
        User,
        UserBook,
        UserClimb,
    ]);

    createServer(app).listen(port, () =>
        console.info(`Server running on port ${port}`)
    );
})();
