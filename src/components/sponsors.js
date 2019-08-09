import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: "100px",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  title: {
    textAlign: "center",
  },
}))

const sponsors = [
  {
    companyName: "SQA Advisors",
    link: "http://www.sqaadvisory.com/",
    imageFileLink: "https://d2x6id2hredblr.cloudfront.net/images/sqa-logo.png",
  },
  {
    companyName: "Solvelyst",
    link: "http://solvelyst.com/",
    imageFileLink: "https://d2x6id2hredblr.cloudfront.net/images/solvelyst.png",
  },
  {
    companyName: "Solvelyst",
    link: "https://www.jetbrains.com/",
    imageFileLink: "https://d2x6id2hredblr.cloudfront.net/images/jetbrains.png",
  },
]

export default function Sponsors() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h4">
        Sponsors
      </Typography>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.mainGrid}
      >
        {sponsors.map(sponsor => (
          <Link key={sponsor.link} href={sponsor.link}>
            <Grid item xs={12} md={8}>
              <img
                className={classes.image}
                src={sponsor.imageFileLink}
                alt={sponsor.companyName}
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </React.Fragment>
  )
}
