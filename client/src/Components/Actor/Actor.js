import React from "react";
import Card from "../../Components/UI/Card/Card";
import styles from "./Actor.module.css";

const Actor = (props) => {
  return (
    <li>
      <Card className={styles.actor}>
        <h3>{props.fullName}</h3>
      </Card>
    </li>
  );
};

export default Actor;
