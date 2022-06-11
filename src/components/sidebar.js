import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"



const Sidebar = (status) => {
    
    const cat = status.status
    
  return (
    <div className="sidebar">
      <div className="menu-wrap">
        <h4>Filter By</h4>
        <ul className="menu-list">
          <li className="menu">
            <a href="#">
              Featured <span className="new">NEW</span>
            </a>
          </li>
          <li className={`menu ${cat === "/social-network" ? "active" : ""}`}>
            <a href="/social-network">
              Social Network <span>12</span>
            </a>
          </li>
          <li className={`menu ${cat === "/productivity" ? "active" : ""}`}>
            <a href="/productivity">
              Productivity <span>129</span>
            </a>
          </li>
          <li className="menu">
            <a href="#">Featured</a>
          </li>
        </ul>
        <a href="" className="submit">
          Submit new
          <img src="/plus.svg" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
