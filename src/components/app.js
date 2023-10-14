import React from 'react'
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import Hero from "../components/hero"
import Meetups from "../components/meetups"
import Venues from "../components/venues"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"
import { SocialMediaCallout } from "../components/social_media_callout"
import OtherMeetupGroups from "../components/meetup_groups"
import MeetupCta from "../components/meetup_cta"

const useStyles = makeStyles(theme => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    sectionSpacing: {
      marginTop: theme.spacing(10),
    },
    companyButton: {
      width: "100%",
      padding: "30px",
    },
}))

export default function App({ companies, memberCount }) {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <main>
                <Hero />
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                        Featured SWFL Tech Companies
                    </Typography>
                    <Divider />
                    {companies}
                    <Button
                        size="large"
                        variant="outlined"
                        href="/company_directory"
                        className={classes.companyButton}
                    >
                        Click Here To See More SWFL Tech Companies
                    </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.sidebarSection}
                    >
                        Our Upcoming Meetups
                    </Typography>
                    <Meetups />
                    <MeetupCta memberCount={memberCount} />
                    </Grid>
                </Grid>
                <section className={classes.sectionSpacing}>
                    <Venues className={classes.sectionSpacing} />
                </section>
                <section className={classes.sectionSpacing}>
                    <OtherMeetupGroups />
                </section>
                <section className={classes.sectionSpacing}>
                    <SocialMediaCallout source="slack" />
                </section>
            </main>
        </Container>
    );
}