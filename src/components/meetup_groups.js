import React from "react"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Hidden from "@mui/material/Hidden"

const meetupGroups = [
  {
    title: "South West Flordia Regional Technical Partnership",
    subtext: "Dedicated to growing Southwest Florida’s technology sector",
    link: "https://www.swfrtp.org/",
    logo: "https://d2x6id2hredblr.cloudfront.net/images/swfrtp-logo.png",
  },
  {
    title: "SWFL Tech Meetup",
    subtext:
      "A monthly gathering of techies, entrepreneurs, nerds, creatives and investors around Fort Myers",
    link: "https://www.meetup.com/SWFL-Tech-Meetup",
    logo: "https://d2x6id2hredblr.cloudfront.net/images/meetup.png",
  },
  {
    title: "SWFL Hackerspace Bits & Bytes",
    subtext:
      "Technology enthusiasts, hardware hackers, and software specialists",
    link: "https://www.meetup.com/SWFL-Hackerspace-Bits-Bytes/",
    logo: "https://d2x6id2hredblr.cloudfront.net/images/meetup.png",
  },
  {
    title: "Wordpress Meetup Southwest Florida",
    subtext:
      "This WordPress Meetup is open to all who love WordPress --- join us!",
    link: "https://www.meetup.com/wordpress-swfl/",
    logo: "https://d2x6id2hredblr.cloudfront.net/images/meetup.png",
  },
  {
    title: "Southwest Florida Cloud Computing Group",
    subtext:
      "Enthusiasts and professionals interested in cloud technologies and platforms",
    link: "https://www.meetup.com/swflcloud/",
    logo: "https://d2x6id2hredblr.cloudfront.net/images/meetup.png",
  },
]

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  cardMedia: {
    height: 65,
    width: "auto",
    margin: "10px",
  },
  cardLink: {
    height: "100%",
  },
  cardGrid: {
    flexFlow: "row wrap",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    paddingBottom: "0.5em",
  },
}))

export default function MeetupGroups() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography gutterBottom className={classes.title} variant="h4">
        Other Tech Groups and Meetups in SWFL
      </Typography>
      <Grid container spacing={4} className={classes.cardGrid}>
        {meetupGroups.map(meetupGroup => (
          <Grid item key={meetupGroup.title} xs={12} md={6} lg={4}>
            <CardActionArea
              component="a"
              href={meetupGroup.link}
              className={classes.cardLink}
              target="_blank"
            >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="subtitle1">
                      {meetupGroup.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {meetupGroup.subtext}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={meetupGroup.logo}
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
