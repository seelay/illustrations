import React from "react"
import { Link, graphql } from "gatsby"

import Illustrations from "../components/illustrations"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

import Product from "../components/product"
import Featured from "../components/featured"
import Control from "../components/control"
import Lineal from "../components/lineal"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illustrations" />
        <Hero />
        {/* <Illustrations /> */}
        <Control />
        <Lineal />

        {/* <Featured /> */}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML)
          html

          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            category
            png {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
