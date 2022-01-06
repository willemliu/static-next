import Cors from 'micro-cors';
import 'isomorphic-unfetch';
const cors = Cors({ allowMethods: ['GET', 'HEAD'] });

async function regenerate(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const webhookVercel = fetch(
        'https://api.vercel.com/v1/integrations/deploy/QmNYzrk6Y9P1qL6PWVTnp9fForR7FuZp8JTfFyZ71CnVVS/3qWMRbPwMg'
    ).then((res) => res.json());

    const webhookAWSAmplify = fetch(
        'https://webhooks.amplify.eu-west-1.amazonaws.com/prod/webhooks?id=39136c3c-a922-4014-8f44-7ffc09af7da6&token=hCtGi1YQdYDPvBJPlSFU9O6s8XrMMo7hjuLJDdz5wn4',
        { method: 'POST' }
    ).then((res) => res.json());

    const response = await Promise.all([webhookVercel, webhookAWSAmplify]);

    res.end(JSON.stringify(response));
}

export default cors(regenerate);
