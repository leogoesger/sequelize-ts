import services from "./services";

interface IArg {
    id: number;
}

const bookQueries = {
    getBooks: () => services.getBooks(),

    getBook: (parentValue: any, { id }: IArg) => services.getBook(id),
};

export default bookQueries;
