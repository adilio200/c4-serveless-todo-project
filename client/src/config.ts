// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'j729b9ekfl'
const region = 'us-east-2'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-5fbh76es.us.auth0.com',            // Auth0 domain
  clientId: '21YOf680WkA0FQqnwgPMvPoWTX2HrdKq',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
