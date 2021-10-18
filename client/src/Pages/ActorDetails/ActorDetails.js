import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../Components/Movie/Movie";
import styles from "./ActorDetails.module.css";

const ActorDetails = () => {
  const [actor, setActor] = useState({});
  const params = useParams();
  const { actorId } = params;

  // GET actor with id
  const fetchActor = useCallback(async () => {
    const actor = await fetch(`/api/actors/${actorId}?api-key=123`);
    const jsonResponse = await actor.json();
    setActor(jsonResponse);
  }, [actorId]);

  useEffect(() => {
    fetchActor();
  }, [fetchActor]);

  const gender = actor.genre === "f" ? "Female" : "Male";

  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img src={actor.photourl} alt="actor" className={styles.actorImg} />
          </div>
          <div className="col-md-6">
            <h1>{actor.fullname}</h1>
            <p>
              <span>Gender: </span>
              {gender}
            </p>
            <p>
              <span>Birthday: </span>
              {formatDate(actor.birthday)}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, dicta nam beatae distinctio maxime quam sapiente
              blanditiis adipisci aliquam alias quasi consectetur labore
              recusandae non suscipit, officiis veniam molestiae aut. Quos nam
              quod alias soluta facilis voluptate dicta totam dolorem esse
              atque, deserunt nesciunt, repellat maxime sint repellendus nemo
              odit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorDetails;
