import React from "react"

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_img">
            <img src="/notebook.svg" />
          </div>
          <div className="hero_details">
            <div className="texts">
              {/* <h1>Free illustrations</h1> */}
              <p>
                All the <strong>illustrations</strong> are completely
                <strong> free</strong>. You can download these illustrations
                including .svg, .eps and .png files and
                <strong> use</strong> them in your work.
              </p>
            </div>

            <div className="btn-lnks">
              <div className="dwn-links">
                <button className="btn btn-download">
                  <h4>Download</h4>
                </button>
                <ul className="dwn-list">
                  <li>
                    <a
                      target="blank"
                      href="https://mega.nz/folder/JfpkVJwC#7deavF2sglSdOSK-97EL4A"
                    >
                      SVG, EPS and PNG Files
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.buymeacoffee.com/seelay"
                className="btn btn-coffee"
              >
                <h4>Buy me a coffee</h4>
              </a>
            </div>

            <div className="license">
              <p>
                Free for <a href="/license">Commercial and Personal Use</a>. No
                need to credit, license, or anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
