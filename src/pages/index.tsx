import * as React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Calendar from '../components/Calendar';

// Import json file of SAIG staff
import people from '../people';

import './index.scss'

const Logo = require('../layouts/images/logo.svg');

type State = {
  personID: number,
};

class IndexPage extends React.Component<null, State> {
  state = {
    personID: -1,
  };

  componentDidMount() {
    this.setState({
      personID: Math.floor(Math.random() * (people.length)),
    });
  }

  render () {
    const {personID} = this.state;

    let name = '';
    let role = '';
    let avatarClass = '';

    if (personID > 0) {
      // Pick a random person
      const person = people[personID];
    
      name = person.name;
      role = person.role;
      avatarClass = 'messages__avatar--' + person.id;
    }
  
    return (
      <div className="page">
        <div className="messages__container">
          <div>
            <div className="messages__avatar-title">
              {name && role ? `${name} · ${role}` : null}
            </div>
            {avatarClass ? <div className={`messages__avatar ${avatarClass}`} /> : null}
          </div>
          <div className="messages__message messages__message-1">
            <p><strong>SAIG</strong> is a student group which wants to be a part of shaping the future of artificial intelligence. We care about the tech <span className="italics">and</span> the ethics involved.</p>
          </div>
          <div className="messages__message messages__message-combo messages__message-2">
            <Link
              to="join"
              className="messages__message-survey"
            >
              <h3>Join our mailing list</h3>
              <p>Follow our events and more!</p>
            </Link>
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
}

export default IndexPage
