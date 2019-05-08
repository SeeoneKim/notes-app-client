export default {
    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
      REGION: "us-east-1",
      BUCKET: "uploaded-notes-app"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://2yllnd1um0.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_4aUDDs0Yg",
      APP_CLIENT_ID: "52u2uklfrkr8ngabh6b7ol04cm",
      IDENTITY_POOL_ID: "us-east-2:0a0efd1c-059b-4e60-8a9a-4c01b8d9365e"
    }
  };
  