import React from "react";
import "isomorphic-unfetch";
import { Regenerate } from "../src/components/Regenerate";
import Link from "next/link";

function Index(props: any) {
    return (
        <>
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
            <p>Static pages:</p>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home SPA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssg/[slug]" as="/ssg/static-generated">
                        <a>Static SPA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssg/[slug]" as="/ssg/static-generated2">
                        <a>Static SPA 2</a>
                    </Link>
                </li>
            </ul>{" "}
            <p>
                On dynamically rendered pages the date behind "Page generated
                on:" always reflects the moment the page is being rendered.
            </p>
            <p>Dynamic pages:</p>
            <ul>
                <li>
                    <Link href="/ssr/[slug]" as="/ssr/server-side-rendered">
                        <a>SSR</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
                        <a>SSR 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr">
                        <a>Hybrid-SSR SPA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr2">
                        <a>Hybrid-SSR SPA 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/csr/[slug]" as="/csr/client-side-rendered">
                        <a>CSR SPA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/csr/[slug]" as="/csr/client-side-rendered2">
                        <a>CSR SPA 2</a>
                    </Link>
                </li>
            </ul>
            <Regenerate date={props?.date} />
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    console.log("getStaticProps", params);
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    return { props: { ...res } };
};

export default Index;
