import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper designletter">
        <div className="container">
          <div className="an-details">
            
          </div>
        </div>
      </div>

      <section className="header_section">
        <div className="container">
          <nav>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <ul className="buttons links">
              <li>
                <a className="btn-tw" target="_blank" href="https://www.buymeacoffee.com/Seelay">Buy me a coffee <img src="/coffee.svg"/></a>
              </li>

            </ul>
          </nav>


        </div>
      </section>
      </>
    )
    return (
      <div className="illlustrations_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <div className="carbon-ads">
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7IT5QI&placement=illlustrationsco" id="_carbonads_js"></script>
        </div>
        {/* <div className="ph-float">
          <a href="https://www.producthunt.com/posts/illlustrations?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-illlustrations" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=174656&theme=light" alt="illlustrations - Open source illustrations library for design projects | Product Hunt Embed"/></a>
        </div> */}
        <footer className="container footer">
          <div className="dev-credit">
          <div className="logo">
            <div className="nav">
              <a href="/"><img src="/logo-foot.svg"/></a>
            </div>
            <div className="menu">
              <a href="/license">Free for Commercial and Personal Use</a>
            </div>
          </div>
          <h3>Project by <a href="https://seelay.co.in">Aman Seelay</a> </h3>
          <ul className="scl-lnk">
            <li><a href="https://behance.net/imseelay" target="__blank"><img src="/behance.svg"/></a></li>
            <li><a href="https://facebook.com/imseelay" target="__blank"><img src="/facebook.svg"/></a></li>
            <li><a href="https://instagram.com/imseelay" target="__blank"><img src="/insta.svg"/></a></li>
          </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
