import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { AllProjects } from '../pages/AllProjects';
import { Licence } from '../pages/Licence';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/allprojects" component={AllProjects} />
        <Route path="/licence" component={Licence}/>
      </Switch>   
    </BrowserRouter>
  );
};