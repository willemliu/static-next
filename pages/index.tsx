import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../src/components/Menu";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>Test {props?.name}</h1>
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

export { getStaticProps as unstable_getStaticProps };

export default Index;
