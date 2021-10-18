import React, { useState, useEffect, useCallback } from "react";
import ActorsList from "../../Components/ActorsList/ActorsList";

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ActorsList actors={actors} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actors;
