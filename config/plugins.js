module.exports = ({ env }) => ({
    
    email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN')
      },
      settings: {
        defaultFrom: env('MAILGUN_FROM'),
        defaultReplyTo: env('MAILGUN_REPLYTO')
      },
    },

    graphql: {
      endpoint: '/graphql',
      tracing: false,
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
    },
    // ...
  });