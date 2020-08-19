import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";

function Menu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated">
                <a>Static</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated2">
                <a>Static 2</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered">
                <a>SSR</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
                <a>SSR 2</a>
            </Link>
            <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr">
                <a>Hybrid-SSR</a>
            </Link>
            <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr2">
                <a>Hybrid-SSR 2</a>
            </Link>
            <Link href="/csr/[slug]" as="/csr/client-side-rendered">
                <a>CSR</a>
            </Link>
            <Link href="/csr/[slug]" as="/csr/client-side-rendered2">
                <a>CSR 2</a>
            </Link>
            <Link href="/ssrg/[slug]" as="/ssrg/static-site-regeneration">
                <a>Static Regen</a>
            </Link>
            <Link href="/ssrg/[slug]" as="/ssrg/static-site-regeneration2">
                <a>Static Regen 2</a>
            </Link>
        </nav>
    );
}

export { Menu };
