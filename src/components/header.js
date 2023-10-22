import React from "react"
import { makeStyles } from "@mui/styles"
import Toolbar from "@mui/material/Toolbar"
import SocialMedia from "./social_media"
import CodersLogo from "../assets/svg-logos/coders-logo.svg"
import { Helmet } from "react-helmet"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className="header">
      <Toolbar className={classes.toolbar} disableGutters={true}>
      <Helmet>
          <title>SWFL Coders</title>
      </Helmet>
        <a href="/"><CodersLogo /></a>
        <SocialMedia />
      </Toolbar>
    </div>
  )
}
