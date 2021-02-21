import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/result" component={Result}/>
        <Route exact path="/:productId" component={Product}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
