import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Smartphones from '../pages/Smartphones';
import Consoles from '../pages/Consoles';
import Others from '../pages/Others';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/smartphones/:brand?" component={Smartphones} />
      <Route path="/consoles/:brand?" component={Consoles} />
      <Route path="/outros" component={Others} />
    </Switch>
  );
}
