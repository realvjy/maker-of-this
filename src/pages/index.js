import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soon from "../components/Soon"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Know makers of your favrouite products" />

        <>
        <div className="announce-wrapper ph">

        </div>
        <Soon />

        </>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            year
            category
            tags
            makers
            website
            domain
            image{
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
