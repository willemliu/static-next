import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../src/components/Menu";
import { Regenerate } from "../src/components/Regenerate";

function Index(props: any) {
    return (
        <>
            <Menu />
            <h1>Home</h1>
            <p>Welcome to the NextJS rendering strategies demo.</p>
            <p>
                Use the links above to see the effects/pros/cons of each of the
                rendering methods.
            </p>
            <p>
                Use the "Regenerate site" link below to regenerate the
                statically generated pages on this website. The effect is the
                date behind "Page generated on:" will be set to the moment the
                statically generated page is generated.
            </p>
            <p>
                On dynamically rendered pages the date behind "Page generated
                on:" always reflects the moment the page is being rendered.
            </p>

            <Regenerate date={props?.date} />
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
