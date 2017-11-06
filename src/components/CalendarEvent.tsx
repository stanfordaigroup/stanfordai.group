import * as React from 'react';

type Props = {
  month: string,
  day: string,
  time: string,
  type: string,
  url?: string,
  title: string,
  location: string,
  description: string,
};

const Calendar: React.StatelessComponent<Props> = props => {
  if (props.url) {
    return (
      <a
        href={props.url}
        key={props.title}
        title={'View event page ↗'}
        className={'calendar__event calendar__event-link calendar__event--' + props.type}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="calendar__event-dashes" />
        <div className="calendar__event-date">
          <div className="calendar__event-month">{props.month}</div>
          <div className="calendar__event-day">{props.day}</div>
        </div>
        <div className="calendar__event-content">
          <h1 className="calendar__event-title">{props.title}</h1>
          <h2 className="calendar__event-meta">{props.time}  ·  {props.location}</h2>
          {props.description.split("\n").map((text, index) => {
            return <p key={index} className="calendar__event-description">{text}</p>;
          })}
        </div>
        <div className="calendar__event-icon" />
      </a>
    );
  } else {
    return (
      <div
        key={props.title}
        className={'calendar__event calendar__event--' + props.type}
      >
        <div className="calendar__event-dashes" />
        <div className="calendar__event-date">
          <div className="calendar__event-month">{props.month}</div>
          <div className="calendar__event-day">{props.day}</div>
        </div>
        <div className="calendar__event-content">
          <h1 className="calendar__event-title">{props.title}</h1>
          <h2 className="calendar__event-meta">{props.time}  ·  {props.location}</h2>
          <p className="calendar__event-description">{props.description}</p>
        </div>
        <div className="calendar__event-icon" />
      </div>
    );
  }
};

export default Calendar;
