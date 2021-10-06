import { ApolloProvider } from '@apollo/client';
import { Button } from 'semantic-ui-react';
import client from './config/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>instaclone</h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    </ApolloProvider>
  );
};

export default App;
