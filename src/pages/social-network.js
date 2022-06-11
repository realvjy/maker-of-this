import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sidebar from "../components/sidebar"


class SocialNetwork extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { location } = this.props
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - open source illustrations kit" />

        <>
          <div className="announce-wrapper ph"></div>
          <Hero />
          <section className="mot_section">
            <div className="container">
              <div className="content-box-wrap">
                <Sidebar status={location.pathname} />

                <div className="products-list-wrap">
                  <div className="product-list">
                    {posts.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <a
                          href={node.frontmatter.website + `/?ref=makerofthis`}
                          className="product"
                          key={node.fields.slug}
                          target="_blank"
                        >
                          <div className="p-img">
                            <img
                              src={
                                node.frontmatter.image.childImageSharp.fluid.src
                              }
                            />
                          </div>
                          <div className="p-info">
                            <div className="p-meta">
                              <h1>{title}</h1>
                              <ul>
                                {node.frontmatter.makers.map((maker) => (
                                  <li key={maker}>{maker}</li>
                                ))}
                              </ul>
                              <h4>
                                {node.frontmatter.year} •{" "}
                                {node.frontmatter.domain}
                              </h4>
                            </div>
                            <div className="p-lnk">
                              <span>
                                <img src="/open.svg" />
                              </span>
                            </div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </section>

          <footer>
            <div className="container">
              <div className="footer">
                <div className="about">
                  <a href="/" className="f-brand">
                    <img src="/logo-black.svg" />
                  </a>
                  <ul className="f-menu">
                    <li>
                      <a href="#">About</a>•
                    </li>
                    <li>
                      <a href="#">Correct</a>•
                    </li>
                    <li>
                      <a
                        href="https://www.buymeacoffee.com/realvjy"
                        className="bmc"
                      >
                        Buy me a coffee
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="credit">
                  <div className="author">
                    <h4>
                      Maker <a href="https://vijayverma.co">vijay verma.</a>
                    </h4>
                  </div>
                  <div className="company">
                    <h4>
                      © 2019{" "}
                      <a href="https://dribbble.com/uigate" target="__blank">
                        uigate
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      </Layout>
    )
  }
}

export default SocialNetwork

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    filter: {frontmatter: {category: {eq: "Social Network"}}}
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
