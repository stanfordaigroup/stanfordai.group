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
          href="https://join.slack.com/t/stanfordaigroup/shared_invite/enQtMTkyNDIyNjkzMzQ5LTMxMzJlYjY5MGJlOTA5OGNjOWQ5NDMyMGUzNGQ5NmE3MzdmYWYzMDU4YTViMjZkODlhNmI0MGRmNGM5YmMwMDg"
          className="messages__message messages__message-slack messages__message-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3>Join us on Slack</h3>
          <p>Give us a hello! 👋</p>
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
              <p>We host technical lectures for novices and experts alike.</p>
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
