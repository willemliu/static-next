import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";

function Menu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/test/[slug]" as="/test/hello-world">
                <a>Static</a>
            </Link>
            <Link href="/test/[slug]" as="/test/hello-world2">
                <a>Static 2</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/hello-world">
                <a>SSR</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/hello-world2">
                <a>SSR 2</a>
            </Link>
        </nav>
    );
}

export { Menu };
