import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

/**
 * Primary UI component for navigation
 */
function Menu(props: any) {
    return (
        <nav className={styles.nav}>
            <Link href="/" onClick={props.onClick}>
                Home
            </Link>
            <Link
                href="/ssg/[slug]"
                as="/ssg/static-generated"
                onClick={props.onClick}
            >
                Static
            </Link>
            <Link
                href="/ssg/[slug]"
                as="/ssg/static-generated2"
                onClick={props.onClick}
            >
                Static 2
            </Link>
            <Link
                href="/ssr/[slug]"
                as="/ssr/server-side-rendered"
                onClick={props.onClick}
            >
                SSR
            </Link>
            <Link
                href="/ssr/[slug]"
                as="/ssr/server-side-rendered2"
                onClick={props.onClick}
            >
                SSR 2
            </Link>
            <Link
                href="/hybrid/[slug]"
                as="/hybrid/hybrid-ssr"
                onClick={props.onClick}
            >
                Hybrid-SSR
            </Link>
            <Link
                href="/hybrid/[slug]"
                as="/hybrid/hybrid-ssr2"
                onClick={props.onClick}
            >
                Hybrid-SSR 2
            </Link>
            <Link
                href="/csr/[slug]"
                as="/csr/client-side-rendered"
                onClick={props.onClick}
            >
                CSR
            </Link>
            <Link
                href="/csr/[slug]"
                as="/csr/client-side-rendered2"
                onClick={props.onClick}
            >
                CSR 2
            </Link>
            <Link
                href="/isr/[slug]"
                as="/isr/incremental-static-regeneration"
                onClick={props.onClick}
            >
                Static Regen
            </Link>
            <Link
                href="/isr/[slug]"
                as="/isr/incremental-static-regeneration2"
                onClick={props.onClick}
            >
                Static Regen 2
            </Link>
        </nav>
    );
}

export { Menu };
