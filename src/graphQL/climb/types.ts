const types = `
    enum ClimbEnum {
        SPORTS
        TRAD
        BOULDER
    }

    type Climb {
        name: String
        grade: String
        type: ClimbEnum
        description: String
        protection: String
        images: [String]
    }

    type Query {
        getClimbs: [Climb]
        getClimb(id: ID): Climb
    }
`;

export default types;
