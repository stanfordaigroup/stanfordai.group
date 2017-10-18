import * as React from 'react';
import Link from 'gatsby-link'
import Header from '../components/Header'
import * as invariant from 'invariant';
import * as hdate from 'human-date';

import './index.scss'

const Logo = require('../layouts/images/logo.svg');

const MS_PER_DAY = 1000 * 60 * 60 * 24;

type GoogleEvent = {
  id: string,
  summary: string,
  start: {
    dateTime?: string,
    date?: string,
  }
  location: string,
  description: string,
};

type IndexPageProps = {
  data: {
    allGoogleCalendarEvent: {
      edges: Array<{
        node: GoogleEvent,
      }>
    },
  },
};

function dateDiffInDays(a: Date, b: Date): number {
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

function filterEvents(events: Array<GoogleEvent>): Array<GoogleEvent> {
  return events.filter(event => {
    const eventDate = new Date(event.start.date || event.start.dateTime);

    const daysAwayCount = dateDiffInDays(new Date(), eventDate);

    if (daysAwayCount >= 0 && daysAwayCount <= 7) {
      return true;
    }

    return false;
  });
}

const IndexPage = (props: IndexPageProps) => {
  // Parse the event data
  const events = props.data.allGoogleCalendarEvent.edges.map(event => event.node);

  const upcomingEvents = filterEvents(events).map(event => {
    const parenthesisRegex = /\((.*)\)/;;

    let title = event.summary;
    let subtitleArray = title.match(parenthesisRegex);
    let subtitle = '';

    if (subtitleArray) {
      subtitle = subtitleArray[1];
      title = title.slice(event.summary.indexOf(subtitle) + subtitle.length + 1);
    }

    return Object.assign(
      event,
      {
        humanDate: hdate.relativeTime(event.start.date || event.start.dateTime),
        date: hdate.prettyPrint(event.start.date || event.start.dateTime, {
          showTime: true,
        }),
        title: title,
        subtitle: subtitle,
        parsedData: event.description ? JSON.parse(event.description) : null,
      },
    );
  });

  return (
    <div className="page">
      <div className="messages__container">
        <div className="messages__avatar-title">
          Junwon Park  ·  President of SAIG
        </div>
        <div className="messages__avatar" />
        <div className="messages__message messages__message-1">
          <p><strong>SAIG</strong> is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech <span className="italics">and</span> the ethics involved.</p>
        </div>
        <a 
          href="https://www.surveymonkey.com/r/stanfordai"
          className="messages__message messages__message-survey messages__message-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3>Join us today</h3>
          <p>Sign up for our mailing list! 👋</p>
        </a>
        <a
          href="https://www.facebook.com/groups/stanfordaigroup/"
          className="messages__message messages__message-facebook messages__message-3"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3>Join us on Facebook</h3>
          <p>Our group doesn't bite.</p>
        </a>
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
              <p>We invite the world’s experts to share their work.</p>
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

        <hr className="content__divider" />

        <div className="upcomingEvents__container">
          {/* <h1 className="upcomingEvents__title">Upcoming Events</h1> */}
          <div className="upcomingEvents__list">
            {upcomingEvents.map(event => {
              const link = event.parsedData.link;

              return (
                <a
                  href={link}
                  className="upcomingEvents__event"
                  key={event.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h3 className="upcomingEvents__event-subtitle">{event.subtitle}</h3>
                  <h2 className="upcomingEvents__event-title">{event.title}</h2>
                  <h4>{event.date}</h4>
                  <h4>{event.location}</h4>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query HomeQuery {
    allGoogleCalendarEvent {
      edges {
        node {
          id
          start {
            dateTime
            date
          }
          summary
          location
          description
        }
      }
    }
  }
`;

export default IndexPage
