import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";

function Index(props: any) {
    return (
        <>
            <Menu />
            <h1>SSR [{props?.name}]</h1>
            <p>
                This page is server-side-rendered. No matter how you land on
                this page (link or direct). You'll always be served a SSR
                version of the page. The "Page generated on:" date also changes
                with every visit because the page is re-rendered server-side
                upon every visit.
            </p>
            <p>
                Some of the effects of SSR:
                <ul>
                    <li>Always longest TTFB</li>
                    <li>Always the up-to-date version of the page</li>
                    <li>No flickering caused by rendering dynamic data</li>
                    <li>Breaks SPA navigation</li>
                </ul>
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
