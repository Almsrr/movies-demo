import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";

import Layout from "./Components/UI/Layout";
import Movies from "./Pages/Movies/Movies";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Movies} exact />
        <Route path="/new-movie" component={NewMovieForm} />
      </Switch>
    </Layout>
  );
}

export default App;
