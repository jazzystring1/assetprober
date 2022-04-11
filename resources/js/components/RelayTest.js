import React from 'react';
import graphql from 'react-relay';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import Loading from './Loading';

const { Suspense } = React;

// Define a query
const UserQuery = graphql`
  query UserQuery($id: ID!) {
    users(id: $id) {
      id
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQueryRef = loadQuery(RelayEnvironment, UserQuery, {
  id: "1"
});



// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(UserQuery, props.preloadedQueryRef);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.user?.email}</p>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function RelayTest(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Loading/>}>
        <App preloadedQueryRef={preloadedQueryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default RelayTest;