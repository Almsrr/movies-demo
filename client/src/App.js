import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navigation from "./Components/UI/Navigation/Navigation";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Movies from "./Pages/Movies/Movies";
import Actors from "./Pages/Actors/Actors";
import ActorDetails from "./Pages/Actors/ActorDetails/ActorDetails";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <Header title="Movies" />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/actors" exact component={Actors} />
            <Route path="/actors/:id" component={ActorDetails} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
