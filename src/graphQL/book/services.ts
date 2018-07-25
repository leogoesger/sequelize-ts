import { Book } from "../../models";

const services = {
    getBooks: () => Book.findAll(),
    getBook: (id: number) => Book.findById(id),
};

export default services;
