import React from "react";

import { Route, Link} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/welcome">Welcome</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </header>
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
