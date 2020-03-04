import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>SSG [{props?.name}]</h1>
            <p>
                This page is statically generated and does not update until
                redeployed. Use the `Regenerate site` link below to redeploy.
                This implementation uses getStaticProps and getStaticPaths.
            </p>
            <Regenerate date={props?.date} />
        </>
    );
}

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
