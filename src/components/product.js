

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <h4>Made with ❤ by</h4>
        <div className="product-wrap">
          <div className="product-box">
            <a href="https://seelay.co.in" target="__blank" className="p-box">
              <img src="s-logo.svg" />
            </a>
          </div>
          {/* <div className="product-box">
            <a href="https://uiprint.co/?ref=illlustrations" target="__blank" className="p-box">
              <img src="uiprint.svg" />
            </a>
          </div>

          <div className="product-box">
            <a href="https://instagram.com/uihues?ref=illlustrations" target="__blank" className="p-box">
              <img src="uihues.svg" />
            </a>
          </div>

          <div className="product-box">
            <a href="https://uilogos.co/?ref=illlustrations" className="p-box"target="__blank" >
              <img src="uilogos.svg" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Product
