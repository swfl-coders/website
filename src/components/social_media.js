import React from "react"
import Link from "@mui/material/Link"
import { makeStyles } from "@mui/styles"
import MeetupIcon from "../assets/svg-logos/meetup-brands.svg"
import SlackIcon from "../assets/svg-logos/slack-brands.svg"
import FacebookIcon from "../assets/svg-logos/facebook-f-brands.svg"
import GitHubIcon from "../assets/svg-logos/github-brands.svg"
import TwitterIcon from "../assets/svg-logos/twitter-brands.svg"
import YouTubeIcon from "../assets/svg-logos/youtube-brands.svg"

const useStyles = makeStyles(theme => ({
  socialMedia: {
    display: "flex",
    justifyContent: "space-between",
    width: "165px",
    marginRight: "25px"
  },
  socialmedianav: {
    height: "30px",
    color: "black",
    marginLeft: "5px"
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
      link: "https://www.facebook.com/SWFLCoders/",
    },
    {
      icon: <TwitterIcon className={classes.socialmedianav} />,
      link: "https://twitter.com/SWFLCoders",
    },
    {
      icon: <GitHubIcon className={classes.socialmedianav} />,
      link: "https://github.com/swfl-coders",
    },
    {
      icon: <YouTubeIcon className={classes.socialmedianav} />,
      link: "https://www.youtube.com/channel/UCddevqVraYVVQHJTbPTf5oA",
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
