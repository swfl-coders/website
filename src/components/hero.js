import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/user/erondu"
          alt="background"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Join us to learn, network, and grow
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              SWFL Coders exists to to support developers and designers of all
              levels and abilities in Southwest Florida and help them grow in
              their craft and careers.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
