import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SocialMedia from "./social_media"

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
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          SWFL Coders
        </Typography>
        <SocialMedia />
      </Toolbar>
    </div>
  )
}
