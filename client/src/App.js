import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import Result from './pages/Result';
import Product from './pages/Product';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import {Toaster} from 'react-hot-toast'

const queryClient = new QueryClient();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider 
      mode="checkout-session"
      stripe={stripePromise}
      currency="USD"
      >
      <BrowserRouter>
      <Toaster position="bottom-center"/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/result" component={Result}/>
          <Route exact path="/:productId" component={Product}/>
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App;
