import React from 'react'
import Link from 'gatsby-link'

import Logo from '../layouts/images/logo.svg';
import LogoEnd from '../layouts/images/logo-end.svg';

import './index.scss'

const IndexPage = () => (
  <div className="page">
    <header className="header__container">
      <div className="header_dashes" />
      <div className="header__top">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={Logo} alt="Stanford AI Group" />
        </Link>
        {/*<nav className="header__navbar">
          <a href="#">Constitution</a>
          <a href="#">About</a>
        </nav>*/}
      </div>
      <hr className="header__divider" />
      <h1 className="header__hero">A community to engage with artificial intelligence, <span className="italics">right now</span>.</h1>
    </header>
    <div className="messages__container">
      <div className="messages__avatar-title">
        Junwon Park  ·  President of SAIG
      </div>
      <div className="messages__avatar" />
      <div className="messages__message messages__message-1">
        <p><strong>SAIG</strong> is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech and the ethics involved.</p>
      </div>
      <div className="messages__message messages__message-2">
        <p>We're a growing community, and we'd love to have you on our team!</p>
      </div>
    </div>
    <div className="content__container">
      <div className="bullets__container">
        <div className="bullets__bullet bullets__bullet-projects">
          <div className="bullets__bullet-icon" />
          <div className="bullets__bullet-content">
            <h3>AI Projects</h3>
            <p>From chatbots to cutting-edge work in AI to machine learning—we’re interested in it all.</p>
          </div>
        </div>
        <div className="bullets__bullet bullets__bullet-speakers">
          <div className="bullets__bullet-icon" />
          <div className="bullets__bullet-content">
            <h3>World Class Speakers</h3>
            <p>We host technical lectures for novices and experts alike.</p>
          </div>
        </div>
        <div className="bullets__bullet bullets__bullet-tutorials">
          <div className="bullets__bullet-icon" />
          <div className="bullets__bullet-content">
            <h3>Technical Tutorials</h3>
            <p>We host lectures and workshops for novices and experts alike.</p>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer__container">
      <div className="footer">
        <img className="footer__logo-end" src={LogoEnd} />
        <h3 className="footer__copyright">&copy; SAIG 2017.</h3>
        <p className="footer__text">Stanford AI Group is a student organization at Stanford University.</p>
      </div>
    </footer>
  </div>
)

export default IndexPage
