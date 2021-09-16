import React, { useState, useEffect, useCallback } from "react";

import ActorsList from "./ActorsList/ActorsList";
import styles from "./Actors.module.css";

const Actors = () => {
  const [actors, setActors] = useState([]);

  const fetchActors = useCallback(async () => {
    const actors = await fetch("/api/actors?api-key=123");
    const jsonActors = await actors.json();
    setActors(jsonActors);
  }, []);

  useEffect(() => {
    fetchActors();
  }, [fetchActors]);

  return (
    <section>
      <h1 className={styles.title}>Actors</h1>
      <ActorsList actors={actors} />
    </section>
  );
};

export default Actors;
