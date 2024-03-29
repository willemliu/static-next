import { NextApiRequest, NextApiResponse } from 'next';

async function regenerate(req: NextApiRequest, res: NextApiResponse) {
    try {
        const awsResponse = fetch(process.env.WEBHOOK_AWS_AMPLIFY, {
            method: 'POST',
        }).then((res) => res.json());
        const revalidateHome = res.revalidate('/');
        const revalidateSSG = res.revalidate('/ssg/static-generated');
        const revalidateSSG2 = res.revalidate('/ssg/static-generated2');
        const revalidateISR = res.revalidate(
            '/isr/incremental-static-regeneration'
        );
        const revalidateISR2 = res.revalidate(
            '/isr/incremental-static-regeneration2'
        );
        const revalidateRSC = res.revalidate('/app/react-server-components');
        const revalidateRSC2 = res.revalidate('/app/react-server-components');

        await Promise.all([
            awsResponse,
            revalidateHome,
            revalidateSSG,
            revalidateSSG2,
            revalidateISR,
            revalidateISR2,
            revalidateRSC,
        ]);
        return res.json({
            revalidated: true,
            awsResponse,
            revalidateHome,
            revalidateSSG,
            revalidateSSG2,
            revalidateRSC,
            revalidateRSC2,
        });
    } catch (err) {
        console.error(err);
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating');
    }
}

export default regenerate;
