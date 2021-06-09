import React from 'react'
import Home from './Pages/home'
import Notice from './Pages/notice'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CategoryProvider } from './Contexs/categoryContext';

function App() {
  return (
    <Router>
      <CategoryProvider>

        <Switch>

          <Route path='/notice/:id'>
            <Notice/>
          </Route>

          <Route path='/' exact>
            <Home/>
          </Route>

        </Switch>

      </CategoryProvider>
    </Router>
  );
}

export default App;
