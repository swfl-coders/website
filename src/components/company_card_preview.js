import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles(theme => ({
  cardArea: {
    marginBottom: "10px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardMedia: {
    height: 65,
    width: "auto",
    margin: "10px",
  },
}))

export default function CompanyCardPreview({ company }) {
  const classes = useStyles()

  return (
    <CardActionArea
      component="a"
      href={company.frontmatter.path}
      target="_blank"
      className={classes.cardArea}
    >
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="subtitle1">
              {company.frontmatter.company_name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {`Tech stack: ${company.frontmatter.tech_stack}`}
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={company.frontmatter.company_logo}
            title="Image title"
          />
        </Hidden>
      </Card>
    </CardActionArea>
  )
}
