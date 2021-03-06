import React from "react";
import firebase from "./firebase";

import { useDatabaseListData } from "reactfire";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Result() {
  const { data, status } = useDatabaseListData(
    firebase.database().ref("users")
  );
  console.log(data, status);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    //display home
    <div>{
        status === 'success' && data.length > 0 && data.map((user:any) =>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            email: {user.email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            id : {user.id}
          </Typography>
          <Typography variant="body2" component="p">
           Password : {user.password}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>)}
    </div>
  );
}
