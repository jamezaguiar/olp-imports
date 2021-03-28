import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Smartphones from '../pages/Smartphones';
import Consoles from '../pages/Consoles';
import Others from '../pages/Others';

export default function Routes() {
  return (
    <Switch>
      <Route path="/smartphones" component={Smartphones} />
      <Route path="/consoles" component={Consoles} />
      <Route path="/outros" component={Others} />
    </Switch>
  );
}
