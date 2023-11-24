import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import Header from "./component/Header";
import "./App.css";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
