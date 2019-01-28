/**
 * HeaderPermalink.tsx
 * -> Renders the non-homepage header (shorter, no hero text).
 */

import * as React from 'react';
import Link from 'gatsby-link';
import HeaderNavBar from './HeaderNavBar'

import Logo from '../layouts/images/logo.svg';

import './Header.scss'

type Props = {
  pathname: string,
};

const Header : React.StatelessComponent<Props> = props => (
  <header className="header__container">
    <div className="header__dashes" />
    <div className="header__top">
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={Logo} alt="Stanford AI Group" />
      </Link>
      <HeaderNavBar />
    </div>
  </header>
);

export default Header;
