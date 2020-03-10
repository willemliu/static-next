import React from "react";
import "isomorphic-unfetch";
import { Regenerate } from "../src/components/Regenerate";
import Link from "next/link";
import { getData } from "./api/test";
import { DebugArea } from "../src/components/DebugArea";

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
                        <a title="getStaticProps and getStaticPaths">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssg/[slug]" as="/ssg/static-generated">
                        <a title="getStaticProps and getStaticPaths">Static</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssg/[slug]" as="/ssg/static-generated2">
                        <a title="getStaticProps and getStaticPaths">
                            Static 2
                        </a>
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
                        <a title="getServerSideProps">SSR</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
                        <a title="getServerSideProps">SSR 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr">
                        <a title="getInitialProps">Hybrid-SSR</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr2">
                        <a title="getInitialProps">Hybrid-SSR 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/csr/[slug]" as="/csr/client-side-rendered">
                        <a title="useEffect">CSR</a>
                    </Link>
                </li>
                <li>
                    <Link href="/csr/[slug]" as="/csr/client-side-rendered2">
                        <a title="useEffect">CSR 2</a>
                    </Link>
                </li>
            </ul>
            <Regenerate date={props?.date} />
            <DebugArea value={props?.debugValue} />
        </>
    );
}

export const getStaticProps = async (context: any) => {
    const res = await getData("stranger things");
    console.log("getStaticProps", res, context.params, context.query);
    return { props: { ...res, debugValue: JSON.stringify(res, null, 2) } };
};

export default Index;
