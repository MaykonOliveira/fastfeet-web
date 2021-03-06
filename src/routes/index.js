import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Orders from '../pages/Orders';
import Deliverymen from '../pages/Deliverymen';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
