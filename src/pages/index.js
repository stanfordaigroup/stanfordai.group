import React from 'react'

import Logo from '../layouts/images/logo.svg';

import './index.scss'

const IndexPage = () => (
  <div>
    <header className="header__container">
      <div className="header__top">
        <div className="header_dashes" />
        <a className="header__logo-link" href="#">
          <img className="header__logo" src={Logo} alt="Stanford AI Group" />
        </a>
        <nav className="header__navbar">
          <a href="#">Constitution</a>
          <a href="#">About</a>
        </nav>
      </div>
      <hr className="header__divider" />
      <h1 className="header__hero">A community to engage with artificial intelligence, <span className="italics">right now</span>.</h1>
    </header>
  </div>
)

export default IndexPage
