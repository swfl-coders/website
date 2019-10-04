import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"

const links = [
  { label: "Home", path: "/" },
  { label: "Company Directory", path: "/company_directory" },
]

export default function Nav() {
  return (
    <AppBar position="static">
      <Toolbar component="nav" variant="dense" className="toolbar">
        {links.map(link => (
          <Button key={link.label} href={link.path} className="toolbar__button">
            {link.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
