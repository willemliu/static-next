import ApolloClient from 'apollo-boost';

declare let process: any;

type JWTClient = {
    bearer: string;
    client: ApolloClient<any>;
};
const clients: { bearer: string; client: ApolloClient<any> }[] = [];

export function getApolloClient(
    customHeaders?: { authorization: string | undefined } | boolean,
    cache = true
) {
    let foundClient: JWTClient;
    let authorization = '';

    /**
     * Check if we already have a client assigned with the JWT token.
     * Use that one if we have.
     */
    if (typeof customHeaders === 'object') {
        authorization = customHeaders.authorization;
        foundClient = clients.find(
            (jwtClient) => jwtClient.bearer === authorization
        );
    }

    let apolloClient: ApolloClient<any>;
    if (foundClient) {
        apolloClient = foundClient.client;
    }
    if (!apolloClient) {
        let headers: any = {};
        if (typeof customHeaders === 'object') {
            headers = customHeaders;
        }
        apolloClient = new ApolloClient({
            uri: `${process.env.MOVIESOM_API_URL}`,
            name: 'MovieSom News',
            // version: process.env.ENVIRONMENT,
            credentials: 'include',
            headers,
        });
        apolloClient.defaultOptions.watchQuery = {
            fetchPolicy: cache ? 'cache-and-network' : 'no-cache',
            errorPolicy: 'all',
        };
        apolloClient.defaultOptions.query = {
            fetchPolicy: cache ? 'cache-first' : 'no-cache',
            errorPolicy: 'all',
        };
    }
    return apolloClient;
}
