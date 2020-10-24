import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import MeetupIcon from "../assets/svg-logos/meetup-brands.svg"
import SlackIcon from "../assets/svg-logos/slack-brands.svg"
import FacebookIcon from "../assets/svg-logos/facebook-f-brands.svg"
import GitHubIcon from "../assets/svg-logos/github-brands.svg"
import TwitterIcon from "../assets/svg-logos/twitter-brands.svg"
import "../assets/styles/index.scss"

const useStyles = makeStyles(theme => ({
  socialmedianav: {
    marginRight: theme.spacing(1),
    height: "30px",
    color: "black",
  },
}))

export function SocialMediaCallout(props) {
  const classes = useStyles()
  const social = {
    meetup: {
      icon: <MeetupIcon className={classes.socialmedianav} />,
      link: "https://www.meetup.com/SWFL-Coders/",
      message: "Join us on Meetup",
    },
    slack: {
      icon: <SlackIcon className={classes.socialmedianav} />,
      link:
        "https://join.slack.com/t/swflcoders/shared_invite/enQtNjk2OTUwMjE4OTMwLTIyNDljNjg2Mjk3YWIxMGViYWI2MWU0ODZlZjUzYzJhYjNmMmRjZDE4YmViNjlkYzY4ZjEzYTY3MzVkMDkwNTc",
      message: "Join us on Slack",
    },
    facebook: {
      icon: <FacebookIcon className={classes.socialmedianav} />,
      link: "https://www.facebook.com/SWFLCoders/",
      message: "Join us on Facebook",
    },
    twitter: {
      icon: <TwitterIcon className={classes.socialmedianav} />,
      link: "https://twitter.com/SWFLCoders",
      message: "Join us on Twitter",
    },
    github: {
      icon: <GitHubIcon className={classes.socialmedianav} />,
      link: "https://github.com/swfl-coders",
      message: "Join us on Github",
    },
  }
  return (
    <div align="center">
      <Fab
        href={social[props.source].link}
        variant="extended"
        className="socialmediacallout"
      >
        {social[props.source].icon}
        {social[props.source].message}
      </Fab>
    </div>
  )
}
