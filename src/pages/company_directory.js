import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Header from "../components/header"
import Nav from "../components/nav"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import CompanyCard from "../components/company_card"

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
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
      <Container maxWidth="lg">
        <Header />
        <Nav />
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
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
