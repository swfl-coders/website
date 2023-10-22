import React from "react"
import { makeStyles } from "@mui/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import CardActionArea from "@mui/material/CardActionArea"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function CompanyCard({ company }) {
  const classes = useStyles()

  return (
    <CardActionArea
      component="a"
      href={company.node.frontmatter.path}
      target="_blank"
      className={classes.card}
    >
      <Card href={company.node.frontmatter.path} className={classes.card}>
        <CardHeader
          title={company.node.frontmatter.company_name}
          subheader={company.node.frontmatter.city}
        />
        <CardMedia
          className={classes.media}
          image={company.node.frontmatter.company_logo}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {company.node.excerpt}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
