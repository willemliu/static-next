import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";

function Index(props: any) {
    return (
        <>
            <Menu />
            <h1>SSG [{props?.name}]</h1>
            <p>
                This page is statically generated and does not update until
                redeployed. You'll notice that the "Page generated on:" date
                doesn't change until the website is redeployed. Use the
                "Regenerate site" link below to redeploy.
            </p>
            <p>Some of the effects of SSG:</p>
            <ul>
                <li>Short TTFB (can compete with CSR)</li>
                <li>Static data (can be stale if not used correctly)</li>
                <li>No flickering caused by rendering dynamic data</li>
                <li>SPA capable</li>
            </ul>
            <p>
                This implementation uses <i>getStaticProps</i> and{" "}
                <i>getStaticPaths</i>.
            </p>
            <Regenerate date={props?.date} />
        </>
    );
}

async function getStaticProps(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getStaticProps", res, context.params, context.query);
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
