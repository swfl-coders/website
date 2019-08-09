import React from "react"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import MeetupIcon from "../assets/meetup-brands.svg"
import SlackIcon from "../assets/slack-brands.svg"
import FacebookIcon from "../assets/facebook-f-brands.svg"
import GitHubIcon from "../assets/github-brands.svg"
import TwitterIcon from "../assets/twitter-brands.svg"

const useStyles = makeStyles(theme => ({
  socialMedia: {
    display: "flex",
    justifyContent: "space-between",
    width: "165px",
  },
  socialmedianav: {
    height: "30px",
    color: "black",
  },
}))

export default function SocialMedia() {
  const classes = useStyles()
  const social = [
    {
      icon: <MeetupIcon className={classes.socialmedianav} />,
      link: "https://www.meetup.com/SWFL-Coders/",
    },
    {
      icon: <SlackIcon className={classes.socialmedianav} />,
      link:
        "https://join.slack.com/t/swflcoders/shared_invite/enQtNjk2OTUwMjE4OTMwLTIyNDljNjg2Mjk3YWIxMGViYWI2MWU0ODZlZjUzYzJhYjNmMmRjZDE4YmViNjlkYzY4ZjEzYTY3MzVkMDkwNTc",
    },
    {
      icon: <FacebookIcon className={classes.socialmedianav} />,
      link: "https://github.com/swfl-coders",
    },
    {
      icon: <TwitterIcon className={classes.socialmedianav} />,
      link: "https://www.facebook.com/SWFLCoders/",
    },
    {
      icon: <GitHubIcon className={classes.socialmedianav} />,
      link: "https://twitter.com/SWFLCoders",
    },
  ]

  return (
    <div className={classes.socialMedia}>
      {social.map(network => (
        <Link
          display="block"
          variant="body1"
          href={network.link}
          key={network.link}
        >
          {network.icon}
        </Link>
      ))}
    </div>
  )
}
