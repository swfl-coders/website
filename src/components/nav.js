import React from "react"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"

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
