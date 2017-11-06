import * as React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import people from '../people';

import './index.scss'

const Logo = require('../layouts/images/logo.svg');

const IndexPage = () => {
  const randomNum = Math.floor(Math.random() * (people.length));
  const person = people[randomNum];

  const avatarClass = 'messages__avatar--' + person.id;
  const avatarJSX = <div className={['messages__avatar', avatarClass].join(' ')} />;

  return (
    <div className="page">
      <div className="messages__container">
        <div className="messages__avatar-title">
          {person.name}  ·  {person.role}
        </div>
        {avatarJSX}
        <div className="messages__message messages__message-1">
          <p><strong>SAIG</strong> is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech <span className="italics">and</span> the ethics involved.</p>
        </div>
        <div className="messages__message messages__message-combo messages__message-2">
          <a 
            href="https://www.surveymonkey.com/r/stanfordai"
            className="messages__message-survey"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>Join our mailing list</h3>
            <p>Follow our events and more!</p>
          </a>
          <hr/>
          <a
            href="https://www.facebook.com/groups/stanfordaigroup/"
            className="messages__message-facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>Join us on Facebook</h3>
            <p>Our group doesn't bite. 🙋</p>
          </a>
        </div>
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
      </div>

      <div className="content__divider"></div>

      <Calendar />
    </div>
  );
}

export default IndexPage
