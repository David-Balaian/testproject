import AWS from "../config/aws-sdk.js";
import { createHmac } from 'crypto';
import * as dotenv from "dotenv";
import axios from "axios";
import JWT from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
dotenv.config();

const poolData = {
  UserPoolId: "us-east-1_268fCspYp",
  ClientId: "53stlmrp50pgd3qt8ddlnus3vv",
  PoolRegion: "us-east-1",
};

const cognito = new AWS.CognitoIdentityServiceProvider({
  region: poolData.PoolRegion,
});

export function SignUp(body) {
  const { email, firstName, lastName, password } = body;
  console.log(body);
  return new Promise((resolve, reject) => {
    cognito.signUp(
      {
        ClientId: poolData.ClientId,
        Password: password,
        Username: email,
        // SECRET_HASH: secretHash,
        // UserPoolId: poolData.UserPoolId,
        // DesiredDeliveryMediums: ["EMAIL"],
        // MessageAction: 'SUPPRESS', //stop sending the invitation
        //MessageAction: 'RESET',  // resend the invitation message to a user that already exists
        // TemporaryPassword: "temp#1234", // If you don't specify a value, Amazon Cognito generates one for you.
        UserAttributes: [
          {
            Name: "given_name",
            Value: firstName,
          },
          {
            Name: "family_name",
            Value: lastName,
          }
        ],
      },
      function (err, response) {
        if (err) {
          // console.log('line 47',err);
          reject(err);
        } else {
          resolve(response.User);
        }
      }
    );
  });
}

export function createGroup(groupName) {
  return new Promise((resolve, reject) => {
    cognito.createGroup(
      {
        GroupName: groupName,
        UserPoolId: poolData.UserPoolId,
      },
      function (err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
}

export function addUserIntoGroup(payload) {
  const { groupName, userName } = payload;
  return new Promise((resolve, reject) => {
    cognito.adminAddUserToGroup(
      {
        GroupName: groupName,
        Username: userName,
        UserPoolId: poolData.UserPoolId,
      },
      function (err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
}

export function UserLogin(payload) {
  const { email, password } = payload;
  return new Promise((resolve, reject) => {
    const hasher = createHmac('sha256', "712la1qka7u7jmcob3g9k6cqj83c5vj9k55amgrmdnr174aksnb");
    hasher.update(`${email}${poolData.ClientId}`);
    const secretHash = hasher.digest('base64');

    cognito.adminInitiateAuth(
      {
        AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
        ClientId: poolData.ClientId,
        UserPoolId: poolData.UserPoolId,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
          SECRET_HASH: secretHash,
        },
      },
      function (err, response) {
        if (err) {
          reject(err);
          return;
        }

        resolve(response);
      }
    );
  });
}

export async function newPasswordRequired(payload) {
  const { email, newPassword, session } = payload;
  return new Promise((resolve, reject) => {
    cognito.adminRespondToAuthChallenge(
      {
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        ClientId: poolData.ClientId,
        UserPoolId: poolData.UserPoolId,
        ChallengeResponses: {
          USERNAME: email,
          NEW_PASSWORD: newPassword,
        },
        Session: session,
      },
      function (err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
}

export function validateAccessToken(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://cognito-idp.${poolData.PoolRegion}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        const body = response.data;
        const pem = jwkToPem(body.keys[1]);

        JWT.verify(token, pem, function (err, payload) {
          if (err) {
            reject(err.message);
          } else {
            resolve(payload);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
