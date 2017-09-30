import * as React from 'react'
import Link from 'gatsby-link'

import './Footer.scss'

const Footer = () => (
  <footer className="footer__container">
    <div className="footer">
      <Link to="/" className="footer__copyright">&copy; SAIG 2017.</Link>
      <p className="footer__text">Student AI Group is a student organization at Stanford University.</p>
    </div>
  </footer>
)

export default Footer
