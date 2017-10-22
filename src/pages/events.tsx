import * as React from 'react';
import Link from 'gatsby-link'
import Header from '../components/Header'

const EventPage = () => {
  return (
    <div className="page">
      <h1 className="upcomingEvents__title">Upcoming Events</h1>

      <div className="upcomingEvents__container">
        <div className="upcomingEvents__day upcomingEvents__day--today">
          <div className="upcomingEvents__today-marker">Today</div>
          <h2 className="upcomingEvents__day-title">15<span>Monday</span></h2>
          <div className="upcomingEvents__list">
            <a href="#" className="upcomingEvents__event">
              <h3>SAIG Board Meeting</h3>
              <h4>Building 300-300, 7pm</h4>
            </a>
          </div>
        </div>
        <div className="upcomingEvents__divider" />
        <div className="upcomingEvents__day">
          <h2 className="upcomingEvents__day-title">16<span>Tuesday</span></h2>
        </div>
        <div className="upcomingEvents__divider" />
        <div className="upcomingEvents__day">
          <h2 className="upcomingEvents__day-title">17<span>Wednesday</span></h2>
        </div>
        <div className="upcomingEvents__divider" />
        <div className="upcomingEvents__day">
          <h2 className="upcomingEvents__day-title">18<span>Thursday</span></h2>
        </div>
        <div className="upcomingEvents__divider" />
        <div className="upcomingEvents__day">
          <h2 className="upcomingEvents__day-title">19<span>Friday</span></h2>
        </div>
        <div className="upcomingEvents__divider" />
        <div className="upcomingEvents__day">
          <h2 className="upcomingEvents__day-title">20<span>Saturday</span></h2>
        </div>
        <div className="upcomingEvents__divider" />
      </div>
    </div>
  );
}

export default EventPage
