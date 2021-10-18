import React from "react";
import { Link } from "react-router-dom";
import Actor from "../Actor/Actor";
import styles from "./ActorsList.module.css";

const ActorsList = (props) => {
  const { actors } = props;

  if (actors.length === 0) {
    return <p className="text-center">Not actors found</p>;
  }

  const listClasses = `row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-2 ${styles.list}`;
  return (
    <ul className={listClasses}>
      {actors.map((actor) => (
        <li key={actor.id}>
          <Link to={`/actors/${actor.id}`} className="no-decoration">
            <Actor key={actor.id} actor={actor} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ActorsList;
