import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path='/product-detail/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/product/add' exact>
            <NewProduct />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
