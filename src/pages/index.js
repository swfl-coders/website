import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Nav from "../components/nav"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CompanyCardPreview from "../components/company_card_preview"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Header from "../components/header"
import Hero from "../components/hero"
import Meetups from "../components/meetups"
import Venues from "../components/venues"
import Sponsors from "../components/sponsors"
import { SocialMediaCallout } from "../components/social_media_callout"
import OtherMeetupGroups from "../components/meetup_groups"
import Footer from "../components/footer"
import "../assets/styles/index.scss"
import FetchJsonP from "fetch-jsonp"
import MeetupCta from "../components/meetup_cta"
import { graphql } from "gatsby"

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

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export default function Index({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const classes = useStyles()
  const companyQueryResults = edges
    .filter(edge => !!edge.node.frontmatter.path)
    .map(edge => <CompanyCardPreview key={edge.node.id} company={edge.node} />)

  const companies = shuffle(companyQueryResults).slice(0, 3)
  const [memberCount, setMemberCount] = useState(0)

  useEffect(() => getMemberCount(), [])

  function getMemberCount() {
    FetchJsonP("https://api.meetup.com/SWFL-Coders/")
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        setMemberCount(json.data.members)
      })
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Helmet>
          <title>SWFL Coders - Home</title> 
      </Helmet>
      <Nav />
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
            <Sponsors />
          </section>
          <section className={classes.sectionSpacing}>
            <OtherMeetupGroups />
          </section>
          <section className={classes.sectionSpacing}>
            <SocialMediaCallout source="slack" />
          </section>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            company_name
            company_logo
            tech_stack
          }
        }
      }
    }
  }
`
