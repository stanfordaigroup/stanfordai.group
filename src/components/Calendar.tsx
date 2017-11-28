/**
 * Calendar.tsx
 * -> Renders a calendar that uses the current calendar.json data as input.
 */

import * as React from 'react';
import CalendarEvent from './CalendarEvent';

import './Calendar.scss';

export type Event = {
  end: {
    dateTime: string,
  },
  start: {
    dateTime: string,
  },
  location: string,
  summary: string,
  updated: string,
  description?: string,
};

type CalendarData = Array<Event>;

// Import the current calendar data
let calendarData: CalendarData = require('../calendar.json').data;

calendarData = calendarData.sort((a, b): number => {
  return new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime();
});

/**
 * Returns a formatted data string.
 * @param date inputted Date object
 */
function formatAMPM(date: Date): string {
  let hours = date.getHours();
  let minutes = String(date.getMinutes());
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = Number(minutes) < 10 ? '0' + minutes : minutes;

  var strTime = hours + ":" + minutes + " " + ampm;

  return strTime;
}

const Calendar: React.StatelessComponent = () => {
  return (
    <div className="calendar__container">
      <div className="calendar">
        <div className="calendar__header">
          <div className="calendar__count">{calendarData.length} upcoming event{calendarData.length > 1 ? 's' : null}</div>
        </div>
        <div className="calendar__list">
          {calendarData.map(event => {
            const startDate = new Date(event.start.dateTime);
            const month = startDate.toLocaleString('en-us', { month: "short" });
            const day = startDate.toLocaleString('en-us', { day: "numeric" });
            const time = formatAMPM(startDate);

            // Default calendar type to social
            let type = 'social';

            // Super-basic, but good enough for now:
            if (event.summary.toLowerCase().indexOf('workshop') !== -1) {
              type = 'workshops';
            } else if (event.summary.toLowerCase().indexOf('speaker') !== -1) {
              type = 'speakers';
            }

            // Check if there's a link included
            const urlRegex = /(https?:\/\/[^\s]+)/g

            const url = urlRegex.exec(event.description);

            const parsedDescription = event.description.replace(urlRegex, '');

            return (
              <CalendarEvent
                key={event.summary}
                month={month}
                day={day}
                time={time}
                type={type}
                url={url && url[0]}
                title={event.summary}
                location={event.location}
                description={parsedDescription}
              />
            );
          })}
        </div>
      </div>
      <div className="calendar__meta">
        <a
          href="https://calendar.google.com/calendar?cid=c3RhbmZvcmQuZWR1X2RoNHZ1bW1la242M2RwOWd0aGxlMWw3cG0wQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>🗓</span> Follow our calendar <small>↗</small>
        </a>
      </div>
    </div>
  )
};

export default Calendar;
