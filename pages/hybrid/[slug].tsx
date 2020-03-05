import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";

function Index(props: any) {
    return (
        <>
            <Menu />
            <h1>Hybrid-SSR [{props?.name}]</h1>
            <p>
                Hybrid SSR works as follows. If you land on the URL directly
                then you'll get a SSR page. When you navigate to this page using
                the links on the website you'll get a CSR page.
                <i>getInitialProps</i> function is called regardless of how you
                landed on this page. When you land on this page directly the{" "}
                <i>getInitialProps</i> is called on the server. When you
                navigated to this page using the links on this website then the{" "}
                <i>getInitialProps</i> is called client-side. A log statement is
                made in the developer console so you can check it yourself.
            </p>
            <p>
                Some of the effects of Hybrid-SSR:
                <ul>
                    <li>Long TTFB (when directly hitting an endpoint)</li>
                    <li>
                        Short TTFB (when navigating using the links on the page
                        as SPA)
                    </li>
                    <li>
                        Always up-to-date version of the data (SSR or CSR with
                        re-hydration)
                    </li>
                    <li>No flickering caused by rendering dynamic data</li>
                    <li>SPA capable</li>
                </ul>
            </p>
            <p>
                This implementation uses <i>getInitialProps</i>.
            </p>
            {props?.date && <p>Page generated on: {props?.date}</p>}
            <div>
                <a
                    href="https://api.zeit.co/v1/integrations/deploy/QmNYzrk6Y9P1qL6PWVTnp9fForR7FuZp8JTfFyZ71CnVVS/Z7ZOSYG4EM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Regenerate site
                </a>
            </div>
        </>
    );
}

Index.getInitialProps = async (context) => {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getInitialProps", res, context.query);
    return { ...res, name: context.query.slug };
};

export default Index;
