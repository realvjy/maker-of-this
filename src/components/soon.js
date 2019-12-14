import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"



const Soon = () => {
  return (
    <section className="hero_section soon">
      <div className="container">
        <nav>
          <Link to={`/`} className="brand">
            <img src="/logo.svg" className="logo" />
          </Link>
          <h1>Maker of this!</h1>
          <p>If you are curios to know who is the maker of your favourite products check here</p>
          <ul className="links links-share">
            <li>
              <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20by%20@realvjy"><img src="/twitter.svg"/> Share on twitter</a>
            </li>
            <li>
              <a className="btn-tw" href="https://www.buymeacoffee.com/realvjy"><img src="/coffee.svg"/> Buy me a coffee</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Soon
