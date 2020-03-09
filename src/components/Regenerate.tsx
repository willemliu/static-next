import React, { useState, useEffect } from "react";
interface Props {
    date?: string;
}

function Regenerate(props: Props) {
    const [baseUrl, setBaseUrl] = useState("http://localhost:3000");
    useEffect(() => {
        setBaseUrl(window.location.host);
    }, []);

    return (
        <>
            {props?.date && <p>Page generated on: {props?.date}</p>}
            <div>
                <a
                    href={`${baseUrl}/api/regenerate`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Regenerate site
                </a>{" "}
                <small>(takes a minute)</small>
            </div>
        </>
    );
}

export { Regenerate };
