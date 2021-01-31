import { Route, Switch } from 'react-router-dom';
import { NavigationPaths } from './NavigationPaths';

import { TodoDashboard } from '../../Views/TodoDashboard/TodoDashboard';
import { Login } from '../../Views/auth/Login/Login';
import { Register } from '../../Views/auth/Register/Register';

export const Routing = () => (
  <Switch>
    <Route path={NavigationPaths.TODOS} exact>
      <TodoDashboard />
    </Route>
    <Route path={NavigationPaths.LOGIN} exact>
      <Login />
    </Route>
    <Route path={NavigationPaths.REGISTER} exact>
      <Register />
    </Route>
  </Switch>
);
