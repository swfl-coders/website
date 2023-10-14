import React from "react"
import { graphql } from 'gatsby'
import { makeStyles } from "@mui/styles"
import { Helmet } from "react-helmet"
import Grid from "@mui/material/Grid"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Header from "../components/header"
import Nav from "../components/nav"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import CompanyCard from "../components/company_card"

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    marginTop: "1em",
  },
  textField: {
    margin: "3em",
  },
}))

export default function CompanyDirectory({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const classes = useStyles()
  const companyQueryResults = edges.filter(edge => !!edge.node.frontmatter.path)

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Helmet>
          <title>SWFL Coders - Company Directory</title> 
      </Helmet>
      <Nav />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom={true}
          className={classes.title}
        >
          SWFL Company Directory
        </Typography>
        <TextField
          label="Search"
          placeholder="Search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Grid container className={classes.root} justify="center" spacing={3}>
          {companyQueryResults.map(company => (
            <Grid key={company.node.id} item>
              <CompanyCard company={company} />
            </Grid>
          ))}
        </Grid>
      </Container>
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
            city
            tech_stack
          }
        }
      }
    }
  }
`
