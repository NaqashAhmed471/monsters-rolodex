import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "../card/Card";

const useStyles = makeStyles(() => {
  return {
    cardList: {
      width: "85vw",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gridGap: "20px",
    },
  };
});

const CardList = (props) => {
  const { cardList } = useStyles();
  return (
    <div className={cardList}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
