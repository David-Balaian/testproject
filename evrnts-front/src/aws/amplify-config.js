import { Amplify } from "aws-amplify";
import { poolData } from "../utils/constants.js";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint:
        "https://pamdznss7beetl3myvtp4eng64.appsync-api.us-east-1.amazonaws.com/graphql",
      region: "us-east-1",
      defaultAuthMode: "apiKey",
      apiKey: "da2-dps5zc2gdnbehgoh42uaqgoeza",
    },
  },
  Auth: {
    Cognito: {
      userPoolClientId: poolData.ClientId,
      userPoolId: poolData.UserPoolId,
      loginWith: {
        username: "false",
        email: "true",
        phone: "false",
      },
    },
  },
});
