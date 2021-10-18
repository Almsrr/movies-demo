import React from "react";
import Card from "../../Components/UI/Card/Card";
import styles from "./Actor.module.css";

const Actor = (props) => {
  const { fullname } = props.actor;

  return (
    <Card className={styles.actor}>
      <h3>{fullname}</h3>
    </Card>
  );
};

export default Actor;
