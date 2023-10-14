import React from "react"
import { makeStyles } from "@mui/styles"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: "100px",
  },
  title: {
    textAlign: "center",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const venues = [
  {
    companyName: "Collaboratory",
    imageFileLink:
      "https://d2x6id2hredblr.cloudfront.net/images/collaboratory.png",
    link: "https://floridacollaboratory.com/",
  },
  {
    companyName: "The Two39 Group",
    imageFileLink:
      "https://d2x6id2hredblr.cloudfront.net/images/two39-group.webp",
    link: "https://www.two39group.com/",
  },
  {
    companyName: "Venture X Naples",
    imageFileLink: "https://d2x6id2hredblr.cloudfront.net/images/venture-x.png",
    link: "https://venturex.com/locations/florida/naples/",
  },
]

export default function Venues() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h4">
        Venues
      </Typography>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.mainGrid}
      >
        {venues.map(venue => (
          <Link key={venue.link} href={venue.link}>
            <Grid item xs={12} md={8}>
              <img
                className={classes.image}
                src={venue.imageFileLink}
                alt={venue.companyName}
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </React.Fragment>
  )
}
