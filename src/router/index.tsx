import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={'/about'} component={About} />
      <Route path={'/projects'} component={Projects} />
    </Switch>
  );
};

export default Router;
