module.exports = {
    experimental: { appDir: true },
    env: {
        WEBHOOK_AWS_AMPLIFY: process.env.WEBHOOK_AWS_AMPLIFY,
        WEBHOOK_VERCEL: process.env.WEBHOOK_VERCEL,
    },
};
