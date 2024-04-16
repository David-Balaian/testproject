import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://rgxiwkqen5b5hgkbw5o6sxog34.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-7nemlyr7s5hpvkxzkz7bfryx4y'
    }
  }
});