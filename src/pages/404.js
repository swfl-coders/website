import React from "react"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default () => (
  <React.Fragment>
    <Helmet>
          <title>SWFL Coders - 404</title> 
    </Helmet>
    <p>Sorry, we can't find what you're looking for.</p>
    <Footer />
  </React.Fragment>
)
