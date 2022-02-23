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
        const revalidateStaticGenerated = res.unstable_revalidate(
            '/ssg/static-generated'
        );
        const revalidateStaticGenerated2 = res.unstable_revalidate(
            '/ssg/static-generated2'
        );

        Promise.all([
            awsResponse,
            revalidateHome,
            revalidateStaticGenerated,
            revalidateStaticGenerated2,
        ]);
        return res.json({
            revalidated: true,
            awsResponse,
            revalidateHome,
            revalidateStaticGenerated,
            revalidateStaticGenerated2,
        });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating');
    }
}

export default regenerate;
