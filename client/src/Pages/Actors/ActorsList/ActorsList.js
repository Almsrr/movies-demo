import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Actor from "../../../Components/Actor/Actor";
import styles from "./ActorsList.module.css";

const ActorsList = (props) => {
  if (props.actors.length === 0) {
    return <p>Not actors found</p>;
  }
  return (
    <ul className={styles.actorsList}>
      {props.actors.map((actor) => (
        <Link to={`/actors/${actor.id}`}>
          <Actor
            key={uuidv4()}
            fullName={actor.fullname}
            gender={actor.gender}
            birthday={actor.birthday}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ActorsList;
