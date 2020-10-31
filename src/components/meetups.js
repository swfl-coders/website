import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import FetchJsonP from "fetch-jsonp"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Moment from "moment"

export default function Meetups() {
  const useStyles = makeStyles(theme => ({
    card: {
      marginBottom: "10px",
    },
  }))
  const [meetups, setMeetups] = useState(null)
  const classes = useStyles()
  useEffect(() => nextMeetup(), [])

  function nextMeetup() {
    FetchJsonP("https://api.meetup.com/SWFL-Coders/events")
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        setMeetups(json.data)
      })
  }

  if (meetups == null) {
    return (
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="p">Loading...</Typography>
          </CardContent>
        </div>
      </Card>
    )
  } else if (meetups.length == 0) {
    return (
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="p">No meetups currently scheduled.</Typography>
          </CardContent>
        </div>
      </Card>
    )
  } else {
    return meetups.map(meetup => (
      <CardActionArea
        key={meetup.created}
        component="a"
        href={meetup.link}
        target="_blank"
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h5">{meetup.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {`${Moment(meetup.local_date).format("MMMM Do YYYY")} | Time: ${
                  meetup.local_time
                }`}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Venue: {meetup.venue ? meetup.venue.name : "TBD"}
              </Typography>
              <Typography variant="subtitle1">
                {meetup.is_online_event ? 'Click to get Zoom Link' : `Address: ${meetup.venue.address_1} ${meetup.venue.city}, ${meetup.venue.zip}`}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    ))
  }
}
