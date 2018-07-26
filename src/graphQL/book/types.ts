const types = `
    type Book {
        title: String
        publishedDate: String
        avaiable: Boolean
        description: String
        comments: [Comment]
    }

    extend type Query {
        getBooks: [Book]
        getBook(id: ID): Book
    }
`;

export default types;
