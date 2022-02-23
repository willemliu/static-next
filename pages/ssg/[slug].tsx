import { Regenerate } from '../../src/components/Regenerate';
import Link from 'next/link';
import { DebugArea } from '../../src/components/DebugArea';
import { getPretendApiData } from '../api/test';

function Index(props: any) {
    return (
        <>
            <h1>SSG [{props?.name}]</h1>
            <p>
                This page is statically generated and does not update until
                redeployed. You'll notice that the "Page generated on:" date
                doesn't change until the website is redeployed. Use the
                "Regenerate site" link below to redeploy.
            </p>
            <p>Some of the effects of SSG:</p>
            <ul>
                <li>Short TTFB (can compete with CSR)</li>
                <li>Static data (can be stale if not used correctly)</li>
                <li>No flickering caused by rendering dynamic data</li>
                <li>SPA capable</li>
            </ul>
            <p>With `fallback: true`:</p>
            <ul>
                <li>
                    <p>
                        Slugs not explicitly handled by `getStaticPaths` for
                        static generation can be statically generated upon first
                        visit. Try it out by visiting some non-sense url like:
                    </p>
                    <Link
                        href="/ssg/[slug]"
                        as="/ssg/sadasdasdasdasdasdqweqwdeasdqweqw"
                    >
                        <a>nonsensical SSG URL</a>
                    </Link>
                    <p>
                        Subsequent visits to this weird URL will then serve up
                        the statically generated version.
                    </p>
                    <small>
                        P.s. because I use `next/link` component here automatic
                        prefetching is enabled and it will trigger the initial
                        static generation automagically.
                    </small>
                </li>
            </ul>
            <p>
                This implementation uses <i>getStaticProps</i> and{' '}
                <i>getStaticPaths</i>.
            </p>
            <Regenerate date={props?.date} />
            <DebugArea value={props?.debugValue} />
        </>
    );
}

export async function getStaticProps(context: any) {
    const res = await getPretendApiData();
    const data = {
        ...res,
        name: context.params.slug ?? context.query,
    };
    console.log('getStaticProps', context.params, context.query);
    return {
        props: { ...data, debugValue: JSON.stringify(data, null, 2) },
    };
}

export async function getStaticPaths(context: any) {
    const res =
        [
            { params: { slug: 'static-generated' } },
            { params: { slug: 'static-generated2' } },
        ] ||
        (await fetch('https://static-next.willemliu.now.sh/api/getRoutes').then(
            (res) => res.json()
        ));
    console.log('getStaticPaths', res, context);
    return {
        paths: res,
        fallback: true,
    };
}

export default Index;
