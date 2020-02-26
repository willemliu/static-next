import React from "react";
import Link from "next/link";

function Menu() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/test/[slug]" as="/test/hello-world">
                <a>Test</a>
            </Link>
            <Link href="/test/[slug]" as="/test/hello-world2">
                <a>Test2</a>
            </Link>
        </nav>
    );
}

export { Menu };
