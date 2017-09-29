import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './normalize.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Student AI Group (SAIG)"
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
