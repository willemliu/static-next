import { NextApiRequest, NextApiResponse } from 'next';

async function regenerate(
    req: NextApiRequest,
    res: NextApiResponse & { unstable_revalidate: any }
) {
    try {
        const awsResponse = fetch(process.env.WEBHOOK_AWS_AMPLIFY, {
            method: 'POST',
        }).then((res) => res.json());
        const revalidateHome = res.unstable_revalidate('/');
        const revalidateSSG = res.unstable_revalidate('/ssg/static-generated');
        const revalidateSSG2 = res.unstable_revalidate(
            '/ssg/static-generated2'
        );
        const revalidateISR = res.unstable_revalidate(
            '/isr/incremental-static-regeneration'
        );
        const revalidateISR2 = res.unstable_revalidate(
            '/isr/incremental-static-regeneration2'
        );

        await Promise.all([
            awsResponse,
            revalidateHome,
            revalidateSSG,
            revalidateSSG2,
            revalidateISR,
            revalidateISR2,
        ]);
        return res.json({
            revalidated: true,
            awsResponse,
            revalidateHome,
            revalidateSSG,
            revalidateSSG2,
        });
    } catch (err) {
        console.error(err);
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating');
    }
}

export default regenerate;
