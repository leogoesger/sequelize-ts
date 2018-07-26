import BookQueries from "./book/queries";
import ClimbQueries from "./climb/queries";
import LocationQueries from "./location/queries";

const Query = {
    ...BookQueries,
    ...ClimbQueries,
    ...LocationQueries,
};

export default Query as any;
