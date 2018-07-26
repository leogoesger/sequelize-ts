const types = `
    enum LocationEnum {
        COUNTRY
        STATE
        REGION
        PLACE
        AREA
        SECTION
    }

    type CountryType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        states: [StateType]
    }

    type StateType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        regions: [RegionType]
    }

    type RegionType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        places: [PlaceType]
    }

    type PlaceType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        areas: [AreaType]
    }

    type AreaType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        sections: [SectionType]
    }

    type SectionType {
        name: String
        geoCode: String
        open: Boolean
        type: LocationEnum
        createdAt: String
        updatedAt: String
        climbs: [Climb]
    }

    extend type Query {
        getCountries: [CountryType]
        getCountry(id: ID): CountryType
        getState(id: ID): StateType
        getRegion(id: ID): RegionType
        getPlace(id: ID): PlaceType
        getArea(id: ID): AreaType
        getSection(id: ID): SectionType
    }
`;

export default types;
