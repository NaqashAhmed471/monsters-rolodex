import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    search: {
      WebkitAppearance: "none",
      border: "none",
      outline: "none",
      padding: "10px",
      width: "150px",
      lineHeight: "30px",
      marginBottom: "30px",
      borderRadius: "5px",
      textAlign: "center",
    },
  };
});

const SearchBox = ({ placeholder, handleChange, value }) => {
  const { search } = useStyles();
  return (
    <div>
      <input
        type="search"
        className={search}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
