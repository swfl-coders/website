import React from "react"
import { makeStyles } from "@mui/styles"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import Hidden from "@mui/material/Hidden"

const useStyles = makeStyles(theme => ({
  cardArea: {
    marginBottom: "10px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: '10px',
    backgroundColor: 'white!important'
  },
  cardMedia: {
    height: 65,
    width: "25%!important",
    margin: "10px",
    objectFit: 'scale-down!important'
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
