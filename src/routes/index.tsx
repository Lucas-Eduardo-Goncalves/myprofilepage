import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Admin } from '../pages/Admin';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/admin" component={Admin} />
        </Switch>   
    </BrowserRouter>
  );
}