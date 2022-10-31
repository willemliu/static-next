import { Regenerate } from '@components/Regenerate';
import { Client } from './client';

async function getData() {
    const res = await fetch('https://static-next.vercel.app/api/test');
    return res.json();
}

export default async function Page({ params }: any) {
    const data = await getData();

    return (
        <>
            <h1>RSC [{params.slug}]</h1>
            <p>
                This page is partially rendered with RSC and partially
                client-side rendered. This feature is still experimental.
            </p>
            <p>Some of the effects of RSC:</p>
            <ul>
                <li>No extra client-side JavaScript</li>
                <li>Dynamic HTML Streaming</li>
                <li>SPA capable</li>
            </ul>
            <p>
                This implementation uses <i>RSC</i>.
            </p>

            <Regenerate date={data.date} />
            <Client />
        </>
    );
}

export async function generateStaticParams() {
    return [
        {
            slug: 'react-server-components',
        },
    ];
}
