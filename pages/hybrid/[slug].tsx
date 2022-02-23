import React from 'react';
import { Regenerate } from '../../src/components/Regenerate';
import { getPretendApiData } from '../api/test';
import { DebugArea } from '../../src/components/DebugArea';

function Index(props: any) {
    return (
        <>
            <h1>Hybrid-SSR [{props?.name}]</h1>
            <p>
                Hybrid SSR works as follows. If you land on the URL directly
                then you'll get a SSR page. When you navigate to this page using
                the links on the website you'll get a CSR page.{' '}
                <i>getInitialProps</i> function is called regardless of how you
                landed on this page. When you land on this page directly the{' '}
                <i>getInitialProps</i> is called on the server. When you
                navigated to this page using the links on this website then the{' '}
                <i>getInitialProps</i> is called client-side. A log statement is
                made in the developer console so you can check it yourself.
            </p>
            <p>Some of the effects of Hybrid-SSR:</p>
            <ul>
                <li>Long TTFB (when directly hitting an endpoint)</li>
                <li>
                    Short TTFB (when navigating using the links on the page as
                    SPA)
                </li>
                <li>
                    Always up-to-date version of the data (SSR or CSR with
                    re-hydration)
                </li>
                <li>No flickering caused by rendering dynamic data</li>
                <li>SPA capable</li>
                <li>
                    Client-side SPA navigation is faster than
                    `getServerSideProps` because no extra round-trip back to the
                    server is required.
                </li>
            </ul>
            <p>
                This implementation uses <i>getInitialProps</i>.
            </p>
            <Regenerate date={props?.date} />
            <DebugArea value={props?.debugValue} />
        </>
    );
}

Index.getInitialProps = async (context: any) => {
    const res = await getPretendApiData();
    console.log('getInitialProps', context.params, context.query);
    const data = {
        ...res,
        name: context.query.slug,
    };
    return { ...data, debugValue: JSON.stringify(data, null, 2) };
};

export default Index;
