import { Regenerate } from '../../src/components/Regenerate';
import { getPretendApiData } from '../api/test';
import { DebugArea } from '../../src/components/DebugArea';

function Index(props: any) {
    return (
        <>
            <h1>SSR [{props?.name}]</h1>
            <p>
                This page is server-side-rendered. The "Page generated on:" date
                also changes with every visit because the page data is refetched
                by calling `getServerSideProps` on the server-side.
            </p>
            <p>Some of the effects of SSR:</p>
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
                <li>
                    <s>Breaks SPA navigation</s> SPA capable since NextJS v9.3+
                </li>
                <li>
                    Client-side SPA navigation is slower than `getInitialProps`
                    because of extra round-trip.
                </li>
            </ul>
            <p>
                This implementation uses <i>getServerSideProps</i>.
            </p>
            <Regenerate date={props?.date} />
            <DebugArea value={props?.debugValue} />
        </>
    );
}

export async function getServerSideProps(context: any) {
    const res = await getPretendApiData();

    console.log('getServerProps', context.params, context.query);
    const data = {
        ...res,
        name: context.query.slug,
    };
    return {
        props: { ...data, debugValue: JSON.stringify(data, null, 2) },
    };
}

export default Index;
