/**
 * Footer.tsx
 */

import * as React from 'react'
import Link from 'gatsby-link'

import './Footer.scss'

const Footer = () => (
  <footer className="footer__container">
    <div className="footer">
      <Link to="/" className="footer__copyright">&copy; SAIG 2017.</Link>
      <p className="footer__text">Student AI Group is a student organization at Stanford University.</p>
      <a
        href="https://www.facebook.com/groups/stanfordaigroup/"
        className="footer__facebook"
        rel="noopener noreferrer"
        target="_blank"
      >Facebook</a>
    </div>
  </footer>
)

export default Footer
