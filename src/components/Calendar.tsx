import * as React from 'react'

import './Calendar.scss'

const Header: React.StatelessComponent = () => (
  <div className="calendar__container">
    <div className="calendar__header">
      <div className="calendar__count">1 upcoming event</div>
    </div>
    <div className="calendar__list">
      <div className="calendar__event calendar__event--speakers">
        <div className="calendar__event-dashes" />
        <div className="calendar__event-date">
          <div className="calendar__event-month">Oct</div>
          <div className="calendar__event-day">26</div>
        </div>
        <div className="calendar__event-content">
          <h1 className="calendar__event-title">Technical Speaker: Animesh Garg</h1>
          <h2 className="calendar__event-meta">7pm  ·  Building 300-300</h2>
          <p className="calendar__event-description">Talk centered on robotic vision and learning.</p>
        </div>
        <div className="calendar__event-icon"></div>
      </div>
      {/* <a href="#" className="calendar__event calendar__event--workshops">
        <div className="calendar__event-dashes" />
        <div className="calendar__event-date">
          <div className="calendar__event-month">Oct</div>
          <div className="calendar__event-day">28</div>
        </div>
        <div className="calendar__event-content">
          <h1 className="calendar__event-title">Workshop: Basic Neural Networks</h1>
          <h2 className="calendar__event-meta">7pm  ·  Building 300-300</h2>
          <p className="calendar__event-description">Talk centered on robotic vision and learning.</p>
        </div>
        <div className="calendar__event-icon"></div>
      </a>
      <a href="#" className="calendar__event calendar__event--social">
        <div className="calendar__event-dashes" />
        <div className="calendar__event-date">
          <div className="calendar__event-month">Nov</div>
          <div className="calendar__event-day">5</div>
        </div>
        <div className="calendar__event-content">
          <h1 className="calendar__event-title">Workshop: Basic Neural Networks</h1>
          <h2 className="calendar__event-meta">7pm  ·  Building 300-300</h2>
          <p className="calendar__event-description">Talk centered on robotic vision and learning.</p>
        </div>
        <div className="calendar__event-icon"></div>
      </a> */}
    </div>
  </div>
)

export default Header
