import React, { useState, useEffect } from "react";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";
import { useRouter } from "next/router";

function Index() {
    const router = useRouter();
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        console.log("useEffect", router);
        fetch(`//${window.location.host}/api/test`)
            .then((res) => res.json())
            .then((json) => {
                const parts = router.asPath.split("/");
                const slug = parts[parts.length - 1];
                setTestData({ ...json, name: slug });
            });
    }, [router]);

    return (
        <>
            <Menu />
            <h1>CSR [{testData?.name}]</h1>
            <p>
                This page is client-side-rendered. The "Page generated on:" date
                changes with every visit because the date is fetched during a
                "useEffect". You'll also be able to notice that the rendering of
                some elements on this page "flickers" as opposed to the other
                pages on this website. That's because some of the values
                rendered into this page are dynamic and can only be rendered
                after the page is interactive (all JS is loaded by the browser
                and interpreted).
            </p>
            <p>
                Some of the effects of CSR:
                <ul>
                    <li>Always shortest TTFB</li>
                    <li>Always the up-to-date version of the page</li>
                    <li>Flickering caused by rendering dynamic data (TTI)</li>
                    <li>SPA capable</li>
                </ul>
            </p>
            <p>
                This implementation uses <i>useEffect</i>.
            </p>
            <Regenerate date={testData?.date} />
        </>
    );
}
export default Index;
