import { Route, Switch } from 'react-router';
import './assets/Global.scss';

import Navbar from './components/Navbar/Navbar.jsx';
import Landing from './components/Landing/Landing.jsx'

const App = () => {

  return (
    <> 
      <Navbar />
      <Switch>
        <section style={styles.sectionPadding}>
        <Route exact path='/' component={ Landing}/>
        </section>
      </Switch>
      </>
  )
}

export default App;

const styles = {
  sectionPadding: {
    padding: "2em 2em",
  }
}