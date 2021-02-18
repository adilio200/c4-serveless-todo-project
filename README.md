# Serverless Travel Memories

This is a simple project implemented using AWS Lambda and Serverless framework. The pplication is a simple Travel Memories where you can store your mais travel views.` in the code to find the placeholders that you need to implement.

# Functionality of the application

This application will allow creating/removing/updating/fetching Travel Memories items. Each user only has access to Travel Memories items that he/she has created.


# Frontend

The `client` folder contains a web application that use the API that should use the backend AWS Lambda and Serverless framework.

The only file that you need to edit is the `config.ts` file in the `client` folder. This file configures your client application and contains an API endpoint and Auth0 configuration:

```ts
const apiId = '...' API Gateway id
const region = '...' AWS Region
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  domain: '...',    // Domain from Auth0
  clientId: '...',  // Client id from an Auth0 application
  callbackUrl: 'http://localhost:3000/callback'
}
```

# How to run the application

## Backend

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

## Frontend

To run a client application first edit the `client/src/config.ts` file to set correct parameters. And then run the following commands:

```
cd client
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless Travel Memories application.
