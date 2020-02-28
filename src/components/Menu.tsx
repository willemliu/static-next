import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";

function Menu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home SPA</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated">
                <a>Static SPA</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated2">
                <a>Static SPA 2</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered">
                <a>SSR</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
                <a>SSR 2</a>
            </Link>
            <Link href="/spa/[slug]" as="/spa/hybrid-ssr">
                <a>Hybrid-SSR SPA</a>
            </Link>
            <Link href="/spa/[slug]" as="/spa/hybrid-ssr2">
                <a>Hybrid-SSR SPA 2</a>
            </Link>
        </nav>
    );
}

export { Menu };
