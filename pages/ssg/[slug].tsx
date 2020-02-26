import "isomorphic-unfetch";
import { Index } from "../index";

async function getStaticProps(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getStaticProps", res, context);
    return { props: { ...res, name: context.params.slug } };
}

async function getStaticPaths(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/getRoutes"
    ).then((res) => res.json());
    console.log("getStaticPaths", res, context);
    return {
        paths: res
    };
}

export {
    getStaticProps as unstable_getStaticProps,
    getStaticPaths as unstable_getStaticPaths
};

export default Index;
