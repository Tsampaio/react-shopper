import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import Result from './pages/Result';
import Product from './pages/Product'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/result" component={Result}/>
          <Route exact path="/:productId" component={Product}/>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
