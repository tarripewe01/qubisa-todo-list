import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

const Card = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>helo guys</Paper>
    </div>
  );
};

export default Card;
