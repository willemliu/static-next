import gql from "graphql-tag";

export const SEARCH_NEWS = gql`
    query SearchNews($q: String, $offset: Int = 0, $limit: Int = 10) {
        searchNewsPaged(q: $q, offset: $offset, limit: $limit) {
            hasNextPage
            totalPages
            totalResults
            items {
                id
                title
                url
                image
                description
                tmdb_movie_ids
                tmdb_tv_ids
            }
        }
    }
`;
