import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Logo from './images/logo.png'
import Logo2X from './images/logo@2x.png'

import './index.css'
import './normalize.css'

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: '100vh',
      justifyContent: 'center',
    }}
  >
    <Helmet
      title="Student AI Group (SAIG)"
    />
    <img src={Logo} srcSet={`${Logo} 1x, ${Logo2X} 2x`} />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
