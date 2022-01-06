import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

/**
 * Primary UI component for navigation
 */
function Menu(props: any) {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a onClick={props.onClick}>Home</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated">
                <a onClick={props.onClick}>Static</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/static-generated2">
                <a onClick={props.onClick}>Static 2</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered">
                <a onClick={props.onClick}>SSR</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
                <a onClick={props.onClick}>SSR 2</a>
            </Link>
            <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr">
                <a onClick={props.onClick}>Hybrid-SSR</a>
            </Link>
            <Link href="/hybrid/[slug]" as="/hybrid/hybrid-ssr2">
                <a onClick={props.onClick}>Hybrid-SSR 2</a>
            </Link>
            <Link href="/csr/[slug]" as="/csr/client-side-rendered">
                <a onClick={props.onClick}>CSR</a>
            </Link>
            <Link href="/csr/[slug]" as="/csr/client-side-rendered2">
                <a onClick={props.onClick}>CSR 2</a>
            </Link>
            <Link href="/isr/[slug]" as="/isr/incremental-static-regeneration">
                <a onClick={props.onClick}>Static Regen</a>
            </Link>
            <Link href="/isr/[slug]" as="/isr/incremental-static-regeneration2">
                <a onClick={props.onClick}>Static Regen 2</a>
            </Link>
        </nav>
    );
}

export { Menu };
