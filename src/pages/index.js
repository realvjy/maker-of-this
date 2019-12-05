import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const listJson = data.allTestdataJson.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - open source illustrations kit" />

        <>
        <div className="announce-wrapper ph">

        </div>
        <Hero />
        <section className="mot_section">
          <div className="container">
            <div className="content-box-wrap">
              <div className="sidebar">
                <div className="menu-wrap">
                  <h4>Filter By</h4>
                  <ul className="menu-list">
                    <li className="menu">
                      <a href="#">Featured <span className="new">NEW</span></a>
                    </li>
                    <li className="menu active">
                      <a href="#">Social Network <span>12</span></a>
                    </li>
                    <li className="menu">
                      <a href="#">Productivity <span>129</span></a>
                    </li>
                    <li className="menu">
                      <a href="#">Featured</a>
                    </li>
                  </ul>
                  <a href="" className="submit">Submit new<img src="/plus.svg"/></a>
                </div>
              </div>
              <div className="products-list-wrap">
                <div className="product-list">

                  <a href="#" className="product">
                    <div className="p-img">
                      <img src="/placeholder.png" />
                    </div>
                    <div className="p-info">
                      <div className="p-meta">
                        <h1>Behance</h1>
                        <ul>
                          <li>Show your work here </li>
                          <li>Evan Sharp</li>
                        </ul>
                        <h4>pinterest.com</h4>
                      </div>
                      <div className="p-lnk">
                        <a href="#"><img src="/open.svg"/></a>
                      </div>
                    </div>
                  </a>



                </div>
              </div>
            </div>
          </div>
          <ul>
            {listJson.map(({ node }) => {
              return(
                node.label
              )
            })}
          </ul>
        </section>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    allTestdataJson {
      edges {
        node {
          label
          link
        }
      }
    }
  }
`
