import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Toolbar from "@material-ui/core/Toolbar"

const links = [
  { label: "Home", path: "/" },
  { label: "Company Directory", path: "/company_directory" },
]
const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
}))

export default function Nav() {
  const classes = useStyles()

  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={classes.toolbarSecondary}
    >
      {links.map(link => (
        <Link
          color="inherit"
          noWrap
          key={link.label}
          variant="body2"
          href={link.path}
          className={classes.toolbarLink}
        >
          {link.label}
        </Link>
      ))}
    </Toolbar>
  )
}
