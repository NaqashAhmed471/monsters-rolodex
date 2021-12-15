import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#95dada",
      border: "1px solid grey",
      borderRadius: "5px",
      padding: "25px",
      cursor: "pointer",
      MozOsxFontSmoothing: "grayscale",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)",
      transition: "transform 0.25s ease-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  };
});

const Card = (props) => {
  const { cardContainer } = useStyles();
  return (
    <div className={cardContainer}>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt="monster"
        width={180}
        height={180}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
