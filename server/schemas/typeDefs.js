const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        productName: String
        price: Number
        description: String
        Category: [Category]!
    }

    type Category {

    }

    type User {

    }

    type favorites {

    }

    type Theme {

    }

    type Query {

    } 

    type Mutation {

    }
`;

module.exports = typeDefs;