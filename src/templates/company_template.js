import React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
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
  query($ppath: String!) {
    markdownRemark(frontmatter: { path: { eq: $ppath } }) {
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
