import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/Landing";
import Stories from "./components/Stories";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/stories" component={Stories} />
      <Footer />
    </Router>
  );
}

export default App;
