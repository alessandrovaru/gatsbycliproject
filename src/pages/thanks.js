import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const thanks = () => {
  return (
    <>
      <Layout>
        <SEO title="Gracias" />
        <h2>Gracias</h2>
        <small>Gracias por llegar hasta aqui</small>
        <span rol="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </Layout>
    </>
  )
}

export default thanks
