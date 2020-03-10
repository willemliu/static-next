import gql from "graphql-tag";

export const NEWS = gql`
    query NewsPaged($offset: Int = 0, $limit: Int = 10) {
        newsPaged(offset: $offset, limit: $limit) {
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
