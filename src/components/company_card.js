import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import CardActionArea from "@material-ui/core/CardActionArea"

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
