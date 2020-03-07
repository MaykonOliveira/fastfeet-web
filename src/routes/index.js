import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Orders from '../pages/Orders';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" component={Orders} isPrivate />
    </Switch>
  );
}
