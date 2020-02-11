import React from "react"
import SEO from "../components/utility/SEO"

const NotFoundPage = () => {
  const classes = useStyles();

  return (
      <>
        <SEO title="404: Not found"/>
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </>
  )
};

export default NotFoundPage