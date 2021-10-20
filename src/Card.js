import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = (theme) => ({
  card: {
    minWidth: 220,
    maxWidth: 220,
    borderRadius: 10,
    padding: 5
  },
  content: {
    padding: 0
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={props.picture}
        />
        {props.name}
      </CardContent>
    </Card>
  );
}
export default withStyles(styles)(SimpleCard);
