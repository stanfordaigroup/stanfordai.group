import * as React from 'react'
import Link from 'gatsby-link'
import HeaderNavBar from './HeaderNavBar'

const Logo = require('../layouts/images/logo.svg');

import './Header.scss'

const Header: React.StatelessComponent = () => (
  <header className="header__container header__home">
    <div className="header__dashes" />
    <div className="header__top">
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={Logo} alt="Stanford AI Group" />
      </Link>
      <HeaderNavBar />
    </div>
    <hr className="header__divider" />
    <h1 className="header__hero">A community to engage with artificial intelligence, <span className="italics">right now</span>.</h1>
  </header>
)

export default Header
