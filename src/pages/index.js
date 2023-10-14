import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Nav from "../components/nav"
import CompanyCardPreview from "../components/company_card_preview"
import Header from "../components/header"
import Footer from "../components/footer"
import App from "../components/app"
import "../assets/styles/index.scss"
import FetchJsonP from "fetch-jsonp"

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
  const theme = createTheme()

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Helmet>
          <title>SWFL Coders - Home</title> 
        </Helmet>
        <Nav />
        <App companies={companies} memberCount={memberCount} />
        <Footer />
      </ThemeProvider>
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
