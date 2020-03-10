import Cors from "micro-cors";
import { NEWS } from "../../src/graphql/queries/news";
import { SEARCH_NEWS } from "../../src/graphql/queries/search";
import { getApolloClient } from "../../src/graphql/client";
const cors = Cors({ allowMethods: ["GET", "HEAD"] });

async function getMovieSomData(searchString?: string, offset = 0) {
    let data = {};
    try {
        const customHeaders = process.env.JWT_TOKEN_READ
            ? { authorization: `Bearer ${process.env.JWT_TOKEN_READ}` }
            : false;
        if (!searchString) {
            const graphRes = await getApolloClient(customHeaders, false).query({
                query: NEWS,
                variables: {
                    offset
                }
            });
            data = graphRes.data.newsPaged;
        } else {
            const graphRes = await getApolloClient(customHeaders, false).query({
                query: SEARCH_NEWS,
                variables: { q: searchString, offset }
            });
            data = graphRes.data.searchNewsPaged;
        }
    } catch (e) {
        console.error(e);
    }
    return data;
}

export async function getData(searchString?: string, offset = 0) {
    return {
        name: "Home",
        date: new Date().toLocaleString(),
        news: await getMovieSomData(null, offset),
        search: await getMovieSomData(searchString, offset)
    };
}

async function test(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await getData()));
}

export default cors(test);
