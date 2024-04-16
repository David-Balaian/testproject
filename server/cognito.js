const AmazonCognito = require("amazon-cognito-identity-js");
const AWS = require("aws-sdk");
const request = require("request");
const jwkToPem = require("jwk-to-pem");
const jwt = require("jsonwebtoken");

// global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: "us-east-1_Y8bQaCXJ3",
  ClientId: "3hm0dse85akc37ch7496lr20r5",
};

const aws_region = "us-east-1";
const CognitoUserPool = AmazonCognito.CognitoUserPool;
const userPool = new AmazonCognito.CognitoUserPool(poolData);

const signUp = (name, email, password) => {
  return new Promise((resolve, reject) => {
    try {
      const attributeList = [];

      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({ Name: "name", Value: name })
      );
      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({
          Name: "email",
          Value: email,
        })
      );
      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({
          Name: "password",
          Value: password,
        })
      );

      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({
          Name: "phone_number",
          Value: "+91545465465456465",
        })
      );
      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({
          Name: "gender",
          Value: "man",
        })
      );
      attributeList.push(
        new AmazonCognito.CognitoUserAttribute({
          Name: "address",
          Value: "address skjd sa",
        })
      );

      userPool.signUp(email, password, attributeList, null, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.signUp = signUp;
