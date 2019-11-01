import React from "react";
import MeetupIcon from "../assets/svg-logos/meetup-brands.svg"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles(theme => ({
  socialmedianav: {
    marginRight: theme.spacing(1),
    height: "30px",
    color: "black",
  },
  meetupCta: {
    marginTop: "20px"
  },
  memberCount: {
    color: "white",
    display: "flex",
    whiteSpace: "pre"
  }
}))

export default function MeetupCta(props) {
  const classes = useStyles()
  return (
    <div align="center" className={classes.meetupCta}>
      <Fab
        href="https://www.meetup.com/SWFL-Coders/"
        variant="extended"
        className="socialmediacallout"
      >
        <MeetupIcon className={classes.socialmedianav} />
        Join our<span className={classes.memberCount}> {props.memberCount} </span>members on Meetup
      </Fab>
    </div>
  )
}
