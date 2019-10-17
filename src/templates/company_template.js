import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import { graphql } from "gatsby"

export default function CompanyTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Container className="company__container">
      <Typography variant="h3" className="company__title">
        {frontmatter.company_name}
      </Typography>
      <Typography
        className="company__details"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <img
        src={frontmatter.company_logo}
        alt={frontmatter.company_name}
        className="company__image"
      />
    </Container>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        company_name
        company_logo
        tech_stack
      }
    }
  }
`
