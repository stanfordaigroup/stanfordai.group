/**
 * HeaderNavBar.tsx
 * -> Renders the navbar in our header.
 */

import * as React from "react";
import Link from "gatsby-link";

import {data as calendarData} from '../calendar.json';

const HeaderNavBar: React.StatelessComponent = () => (
  <nav className="header__navbar">
    <Link to="/events" activeClassName="header__navbar--active">
      Events{" "}
      {calendarData.length > 0 ? (
        <span className="header__navbar-sub">{calendarData.length}</span>
      ) : null}
    </Link>
    <Link to="/archives" activeClassName="header__navbar--active">
      Archives
    </Link>
    <Link to="/about" activeClassName="header__navbar--active">
      About
    </Link>
    <Link
      to="/join"
      className="header__navbar--join"
      activeClassName="header__navbar--active"
    >
      Join SAIG
    </Link>
  </nav>
);

export default HeaderNavBar;
