import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import SideBarShared from "./side-bar";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    justifyContent: "center",
  },
  buttonLinks: {
    margin: theme.spacing(1, 1.5),
  },
  link: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: "none",
    border: "none",
    color: "white",
  },
  borderless: {
    border: "none",
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ background: "rgb(201, 14, 42)" }}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" color="inherit" component={RouterLink}>
            Weza Care
          </Link>
        </Typography>
        <Hidden smDown>
          <Paper className={classes.link} elevation={0}>
            <Link to="/albums" color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Albums</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/photos"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Photos</Typography>
            </Link>
          </Paper>{" "}
          <Paper className={classes.link} elevation={0}>
            <Link to={"/posts"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Posts</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/todos"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Todos</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/users"} component={RouterLink} color="inherit">
              <Typography variant={"h6"}>Users</Typography>
            </Link>
          </Paper>

        </Hidden>
        <Hidden mdUp>
          <SideBarShared />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
