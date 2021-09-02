import React, { useState, useEffect } from "react";

import ActorsList from "./ActorsList/ActorsList";
import styles from "./Actors.module.css";

const Actors = () => {
  useEffect(() => {
    fetchActors();
  }, []);

  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    const actors = await fetch("/api/actors?api-key=123");
    const jsonActors = await actors.json();
    setActors(jsonActors);
  };
  return (
    <section>
      <h1 className={styles.title}>Actors</h1>
      <ActorsList actors={actors} />
    </section>
  );
};

export default Actors;
