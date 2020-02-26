import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../src/components/Menu";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>Test {props?.name}</h1>
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

const getStaticProps = async ({ params }) => {
    console.log("getStaticProps", params);
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    return { props: { ...res } };
};

export { getStaticProps as unstable_getStaticProps, Index };

export default Index;
