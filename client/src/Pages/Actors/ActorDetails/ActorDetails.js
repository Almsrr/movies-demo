import React, { useEffect, useState } from "react";
import styles from "./ActorDetails.module.css";

const ActorDetails = ({ match }) => {
  useEffect(() => {
    fetchActor();
  }, []);

  const [actor, setActor] = useState({});

  // GET actor with id
  const fetchActor = async () => {
    const actor = await fetch(`/api/actors/${match.params.id}?api-key=123`);
    const jsonResponse = await actor.json();
    setActor(jsonResponse);
  };

  // Friendly format for date
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return date.toDateString();
  };

  return (
    <div className={styles.container}>
      <img src={actor.photourl} alt="" className={styles.actorImg} />
      <div className={styles.content}>
        <h2>{actor.fullname}</h2>
        <p>
          <span>Gender </span>
          {actor.gender}
        </p>
        <p>
          <span>Birthday </span>
          {formatDate(actor.birthday)}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          dicta nam beatae distinctio maxime quam sapiente blanditiis adipisci
          aliquam alias quasi consectetur labore recusandae non suscipit,
          officiis veniam molestiae aut. Quos nam quod alias soluta facilis
          voluptate dicta totam dolorem esse atque, deserunt nesciunt, repellat
          maxime sint repellendus nemo odit!
        </p>
      </div>
    </div>
  );
};

export default ActorDetails;
