import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";

import Layout from "./Components/UI/Layout";
import Movies from "./Pages/Movies/Movies";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";
import Actors from "./Pages/Actors/Actors";
import ActorDetails from "./Pages/ActorDetails/ActorDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Movies} exact />
        <Route path="/actors" component={Actors} exact />
        <Route path="/actors/:actorId" component={ActorDetails} />
        <Route path="/new-movie" component={NewMovieForm} />
      </Switch>
    </Layout>
  );
}

export default App;
