import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user ($id: ID!) {
        user(id: $id) {
            token
            name
            favorites
        }
    }
`;