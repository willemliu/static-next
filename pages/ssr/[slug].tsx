import "isomorphic-unfetch";
import { Index } from "../index";

async function getServerProps(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getServerProps", res, context.params, context.query);
    return {
        props: { ...res, name: context.params.slug }
    };
}

export { getServerProps as unstable_getServerProps };

export default Index;
