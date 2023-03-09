const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Product {
        _id: ID
        name: String
        price: Float
        photo_ref: String
        description: String
        category: String
        theme: String
    }

    type User {
        _id: ID
        name: String
        email: String
        isAdmin: Boolean
        isSuper: Boolean
        favorites: [ID]!
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
        addSuperOrAdmin(name: String!, email: String!, password: String!, isAdmin: Boolean!, isSuper: Boolean!): User
        login(email: String!, password: String!): Auth
        removeUserSelf: User
        removeProduct(name: String!): Product
        addProduct(name: String!, price: Float, photo_ref: String, description: String, category: String, theme: String): Product
        addFavorite(name: String!): User
        removeFavorite(name: String!): User
    }
`;

module.exports = typeDefs;