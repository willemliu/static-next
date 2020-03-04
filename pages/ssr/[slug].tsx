import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>SSR [{props?.name}]</h1>
            <p>
                This page is server-side-rendered. No matter how you land on
                this page (link or direct). You'll always be served a SSR
                version of the page.
            </p>
            <p>
                This implementation uses <i>getServerProps</i>.
            </p>
            <Regenerate date={props?.date} />
        </>
    );
}

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
