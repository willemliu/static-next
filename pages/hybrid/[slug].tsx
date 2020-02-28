import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>Hybrid-SSR [{props?.name}]</h1>
            <p>
                Hybrid SSR works as follows. If you land on the URL directly
                then you'll get a SSR page. When you navigate to this page using
                the links on the website you'll get a CSR page.
            </p>
            {props?.date && <p>Site generated on: {props?.date}</p>}
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
    console.log("getServerProps", res, context.query);
    return { ...res, name: context.query.slug };
};

export default Index;
