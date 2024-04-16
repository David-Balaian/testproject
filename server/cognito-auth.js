const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AuthenticationDetails = AmazonCognitoIdentity.AuthenticationDetails;
const CognitoUser = AmazonCognitoIdentity.CognitoUser;

const poolData = {
  UserPoolId: "us-east-1_Y8bQaCXJ3",
  ClientId:
    "arn:aws:cognito-idp:us-east-1:992382398056:userpool/us-east-1_Y8bQaCXJ",
};
const userPool = new CognitoUserPool(poolData);


async function loginUser(username, password) {
    const authenticationData = {
        Username: username,
        Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
        Username: username,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (session) => {
                const accessToken = session.getAccessToken().getJwtToken();
                resolve(accessToken);
            },
            onFailure: (err) => {
                console.error('Authentication error:', err);
                reject(err);
            },
        });
    });
}

const username = 'your_username';
const password = 'your_password';

loginUser(username, password)
    .then((accessToken) => {
        console.log('User authenticated! Access token:', accessToken);
        // Use the access token for subsequent API requests
    })
    .catch((error) => {
        console.error('Authentication failed:', error);
    });

