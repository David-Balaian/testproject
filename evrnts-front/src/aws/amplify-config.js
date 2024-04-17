import { Amplify } from 'aws-amplify';
import { poolData } from '../utils/constants.js';

Amplify.configure({
    API: {
        GraphQL: {
            endpoint: 'https://hacbmhutubfk3e3vvzepdgmz4u.appsync-api.us-east-1.amazonaws.com/graphql',
            region: 'us-east-1',
            defaultAuthMode: 'apiKey',
            apiKey: 'da2-6tt54irv2rd3nl2euv7b7dfebu'
          }
    },
    Auth: {
        Cognito: {
            userPoolClientId: poolData.ClientId,
            userPoolId: poolData.UserPoolId,
            loginWith: {
                username: 'false',
                email: 'true',
                phone: 'false',
            }
        }
    }
});

