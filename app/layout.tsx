import { Footer } from '@components/Footer';
import { Loading } from '@components/Loading';
import { Menu } from '@components/Menu';
import { Suspense } from 'react';

async function getData(): Promise<{ date: string }> {
    return new Promise((resolve, reject) => {
        fetch('https://static-next.vercel.app/api/test')
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => resolve(json), Math.random() * 5000);
            })
            .catch(reject);
    });
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const d = await getData();
    return (
        <html>
            <head></head>
            <body>
                <Menu />

                <Suspense fallback={<Loading />}>{children}</Suspense>

                <Footer />
            </body>
        </html>
    );
}

// export const revalidate = true;
