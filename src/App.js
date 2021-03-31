import { Route, Switch } from 'react-router';
import './assets/Global.scss';

import Navbar from './components/Navbar/Navbar.jsx';
import Landing from './components/Landing/Landing.jsx'

const App = () => {

  return (
    <> 
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Landing}/>
      </Switch>
      </>
  )
}

export default App;

