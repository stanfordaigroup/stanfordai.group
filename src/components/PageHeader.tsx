/**
 * PageHeader.tsx
 * -> The current page's titlebar
 */

import * as React from 'react'

import './PageHeader.scss'

type Props = {
  title: string,
  subtitle: string,
}

const PageHeader: React.StatelessComponent<Props> = props => (
  <div className="pageHeader__container">
    <div className="pageHeader">
      <h1 className="pageHeader__title">{props.title}</h1>
      <h2 className="pageHeader__subtitle">{props.subtitle}</h2>
    </div>
  </div>
)

export default PageHeader
