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
        <footer>
          <div className="container">
            <div className="footer">
              <div className="about">
                <a href="/" className="f-brand">
                  <img src="/logo-black.svg" />
                </a>
                <ul className="f-menu">
                  <li><a href="#">About</a>•</li>
                  <li><a href="#">Correct</a>•</li>
                  <li><a href="https://www.buymeacoffee.com/realvjy" className="bmc">Buy me a coffee</a></li>
                </ul>
              </div>
              <div className="credit">
                <div className="author">
                  <h4>Maker <a href="https://vijayverma.co">vijay verma.</a></h4>
                </div>
                <div className="company">
                  <h4>© 2019 <a href="https://dribbble.com/uigate" target="__blank">uigate</a></h4>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
