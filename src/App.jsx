import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useStyles from './Comps/styles';
import NavBar from './Comps/navBar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Login from './Pages/Login';
import RegisterForm from './Pages/RegisterForm';
import Admin from './Pages/Admin';

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/about' exact component={About} />
          <Route path='/registerform' exact component={RegisterForm} />
          <Route path='/login' exact component={Login} />
          <Route path='/admin' exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;