import React, { useState, useEffect } from 'react';
interface Props {
    date?: string;
}

/**
 * Rebuild page link
 * @param props
 * @returns
 */
function Regenerate(props: Props) {
    const [protocol, setProtocol] = useState('http:');
    const [host, setHost] = useState('localhost:3000');
    useEffect(() => {
        setHost(window.location.host);
        setProtocol(window.location.protocol);
    }, []);

    return (
        <>
            {props?.date && <p>Page generated on: {props?.date}</p>}
            <div>
                <a
                    href={`${protocol}//${host}/api/regenerate`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    Regenerate site
                </a>{' '}
                <small>(takes a minute)</small>
            </div>
        </>
    );
}

export { Regenerate };
