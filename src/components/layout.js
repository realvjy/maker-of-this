import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper ph">

      </div>
      <section className="header_section">

      </section>
      </>
    )
    return (
      <div className="mot_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        
      </div>
    )
  }
}

export default Layout
