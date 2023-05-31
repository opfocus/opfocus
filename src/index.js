// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals'
import MyRouter from './App';

//Realm: use to connect mongodabase  
// https://www.mongodb.com/docs/realm/web/react-web-quickstart/
import * as Realm from "realm-web";
//Apollo:   use to connect mongodabase
// https://www.mongodb.com/docs/realm/web/graphql-apollo-react/
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

// my mongo app sevices 
const APP_ID = 'application-test-ywalv'
export const app = new Realm.App({ id: APP_ID });

// all client requests to the GraphQL endpoint must be authenticated.
// https://www.mongodb.com/docs/realm/web/graphql-apollo-react/
const graphqlUri = 'https://realm.mongodb.com/api/client/v2.0/app/application-test-ywalv/graphql'
const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    }
  }),
  cache: new InMemoryCache(),
});

// function: gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. Tokens must be refreshed after 
    // 30 minutes. To guarantee that the token is valid, we refresh the user's access token.
    await app.currentUser.refreshAccessToken();
  }
  return app.currentUser.accessToken;
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyRouter />
    </ApolloProvider>
  </React.StrictMode>

);

// create-react-app comes with content, Commented out by me
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);



