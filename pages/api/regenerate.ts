import Cors from 'micro-cors';
import 'isomorphic-unfetch';
const cors = Cors({ allowMethods: ['GET', 'HEAD'] });

async function regenerate(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const webhookVercel = fetch(process.env.WEBHOOK_VERCEL).then((res) =>
        res.json()
    );

    const webhookAWSAmplify = fetch(process.env.WEBHOOK_AWS_AMPLIFY, {
        method: 'POST',
    }).then((res) => res.json());

    const response = await Promise.all([webhookVercel, webhookAWSAmplify]);

    res.end(JSON.stringify(response));
}

export default cors(regenerate);
