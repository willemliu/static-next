import React, { useState, useEffect } from "react";
import { Menu } from "../../src/components/Menu";
import { Regenerate } from "../../src/components/Regenerate";
import { useRouter } from "next/router";

function Index() {
    const router = useRouter();
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        console.log(router);
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
                This page is client-side-rendered. Data is fetched and set on
                useEffect.
            </p>
            <Regenerate date={testData?.date} />
        </>
    );
}
export default Index;
