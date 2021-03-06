import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home/index';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
