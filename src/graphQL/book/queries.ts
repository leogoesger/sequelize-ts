import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

import BookType from "./type";
import services from "./services";

interface IArg {
    id: number;
}

const bookQueries = {
    getBooks: {
        type: new GraphQLList(BookType),
        resolve() {
            return services.getBooks();
        },
    },

    getBook: {
        type: BookType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(_: any, { id }: IArg) {
            return services.getBook(id);
        },
    },
};

export default bookQueries;
