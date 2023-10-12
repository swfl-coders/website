import React from "react"
import { makeStyles } from "@mui/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import SocialMedia from "../components/social_media"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkUl: {
    listStyleType: "none",
    padding: "0",
  },
  linkLi: {
    marginTop: "10px",
  },
}))

const contactLinks = [
  {
    title: "Contact Us @ swflcoders@gmail.com",
    url: "https://www.meetup.com/swfl-coders/members/?op=leaders",
  },
  {
    title: "Team",
    url: "/team",
  },
]

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.footerContainer}>
        <div className="footer-links">
          <Typography variant="h6" gutterBottom>
            Thanks for visiting! We hope to see you at our next meetup!
          </Typography>
          <ul className={classes.linkUl}>
            {contactLinks.map(contactLink => (
              <li key={contactLink.url} className={classes.linkLi}>
                <Link
                  color="inherit"
                  variant="body2"
                  href="mailto:swflcoders@gmail.com?subject=Site Inquiry"
                  className={contactLink.url}
                >
                  {contactLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SocialMedia className={classes.socialLinks} />
      </Container>
    </footer>
  )
}
