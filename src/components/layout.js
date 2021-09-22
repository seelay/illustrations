import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
        <section className="header_section">
          <div className="container">
            <nav>
              <Link to={`/`} className="brand">
                <img src="/logo.svg" className="logo" />
              </Link>
            </nav>
          </div>
        </section>
      </>
    )
    return (
      <div className="main">
        <header>{header}</header>
        <main className="main">{children}</main>

        <footer className="container footer">
          <div className="dev-credit">
            <div className="logo">
              <div className="nav">
                <a href="/#">
                  <img src="/logo-foot.svg" />
                </a>
              </div>
              <div className="menu">
                <a href="/license">Free for Commercial and Personal Use</a>
              </div>
            </div>
            <h3>
              Made with ❤ by{" "}
              <a href="https://www.seelay.in" target="__blank" id="seelay-logo">
                SEELAY
              </a>{" "}
            </h3>
            <ul className="scl-lnk">
              <li>
                <a href="https://behance.net/imseelay" target="__blank">
                  <img src="/behance.svg" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/imseelay" target="__blank">
                  <img src="/facebook.svg" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/imseelay" target="__blank">
                  <img src="/insta.svg" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
