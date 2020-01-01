import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"



const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <nav>
          <Link to={`/`} className="brand">
            <img src="/logo.svg" className="logo" />
          </Link>
          <h1>Maker of this!</h1>
          <p>If you are curios to know who is the maker of your favourite products check here</p>
          <ul className="links links-share">
            <li>
              <a className="btn-tw" href="https://twitter.com/intent/tweet?text=know%20who%20is%20the%20maker%20of%20your%20favorite%20from%20https%3A%2F%2Fmakerofthis.com%2Ffrom%20@realvjy"><img src="/twitter.svg"/> Share on twitter</a>
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

export default Hero
