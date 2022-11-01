import { DebugArea } from '@components/DebugArea';
import { Loading } from '@components/Loading';
import { Regenerate } from '@components/Regenerate';
import { Suspense } from 'react';
import { Client } from './client';
import { Server } from './server';

async function getData(delay?: number): Promise<{ date: string }> {
    return new Promise((resolve, reject) => {
        fetch(
            `https://static-next.vercel.app/api/test${
                delay ? `?delay=${delay}` : ''
            }`
        )
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => resolve(json), delay);
            })
            .catch(reject);
    });
}

export default async function Page({ params }: any) {
    const data = await getData();
    const data2 = await getData(Math.random() * 5000);
    const data3 = await getData(Math.random() * 5000);

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
            <ul>
                <li>
                    Server:
                    <Suspense fallback={<Loading />}>
                        <Server date={data2.date} />
                    </Suspense>
                </li>
                <li>
                    Client:
                    <Suspense fallback={<Loading />}>
                        <Client date={data3.date} />
                    </Suspense>
                </li>
            </ul>

            <Suspense fallback={<Loading />}>
                <Regenerate date={data.date} />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <DebugArea value={data.date} />
            </Suspense>
        </>
    );
}

export async function generateStaticParams() {
    return [
        {
            slug: 'react-server-components',
        },
        {
            slug: 'react-server-components2',
        },
    ];
}
