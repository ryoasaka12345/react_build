import React from "react";

import { Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
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
