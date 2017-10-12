import * as React from 'react';
import Link from 'gatsby-link'
import Header from '../components/Header'

import './index.scss'

const Logo = require('../layouts/images/logo.svg');

const IndexPage = () => {
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
      </div>
    </div>
  );
}

export default IndexPage
