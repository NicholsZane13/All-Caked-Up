const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Product {
        _id: ID
        name: String
        price: Float
        description: String
        category: String
        theme: String
    }
    type Favorite {
        _id: ID
        product_id: ID!
    }
    type User {
        _id: ID
        name: String
        email: String
        password: String
        favorites: [Favorite]!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]!
        user(userId: ID!): User
        products: [Product]!
        product(productId: ID!): Product
    } 
    type Mutation {
        addUser(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeUser: User
        removeProduct: Product
        addProduct(name: String!, price: Float, description: String, category: String, theme: String): Product
    }
`;

module.exports = typeDefs;