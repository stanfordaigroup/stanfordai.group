import * as React from 'react';
import Link from 'gatsby-link';

const Logo = require('../layouts/images/logo.svg');

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
      <nav className="header__navbar">
        {props.pathname === '/constitution' ? (
          <div className="header__navbar--active">
            Constitution
          </div>
          ) : (
            <Link
              to="/constitution"
            >
              Constitution
            </Link>
          )
        }
        {props.pathname === '/about' ? (
          <div className="header__navbar--active">
            About
          </div>
          ) : (
            <Link
              to="/about"
            >
              About
            </Link>
          )
        }
      </nav>
    </div>
  </header>
);

export default Header;
