import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './Components/baselayout.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart.js';
import ProductList from './Components/Product/ProductList.js';
import Homepage from './Components/HomePage/HomePage.js';
import ProductSingle from './Components/Product/ProductSingle.js';
import Admin from './Components/Admin/admin.js';
import Search from './Components/Search/Search.js';
import Receipt from './Components/Admin/Receipt.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Admin" component={Admin} />
        <Route path="/Checkout/:productId" component={Receipt} />
        <Route path="/Cart/:productId" component={Cart} />
        <Route exact path="/Products/:id" component={ProductSingle} />
        <Route path="/Products" component={ProductList} />
        <Route exact path="/Search/:str" component={Search} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
