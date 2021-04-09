import React from 'react';
import { Route, Switch } from 'react-router';
import { PostPage } from './Components/PostPage/PostPage';
import { UserDetailsPage } from './Components/UserDetailsPage';
import { DataContextProvider } from './Context/DataContext';

export const App = () => {
  return (
    <DataContextProvider>
      <div className="d-flex">
        <Switch>
          <Route path="/" component={PostPage} exact />
          <Route path="/user/:userId" component={UserDetailsPage} />
        </Switch>
      </div>
    </DataContextProvider>
  );
};
