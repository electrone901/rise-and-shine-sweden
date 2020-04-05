import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/Landing";
import Resources from "./components/Resources";
import Stories from "./components/Stories";
import Footer from "./components/layout/Footer";
import AddResource from "./components/AddResource";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/addResource" component={AddResource} />
      <Footer />
    </Router>
  );
}

export default App;
