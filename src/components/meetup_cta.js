import React from "react"
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
    marginTop: "2em",
  },
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
        Join &nbsp;<strong> {props.memberCount} </strong>&nbsp;members
      </Fab>
    </div>
  )
}
