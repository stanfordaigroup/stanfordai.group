/**
 * JoinForm.tsx
 * -> Renders the form that allows users to join SAIG.
 */

import * as React from 'react';
import Link, {navigateTo} from 'gatsby-link';

import './JoinForm.scss';

type State = {
  fullname: string,
  email: string,
  year: string,

  formSubmitted: boolean,
  formError: boolean,
  formLoading: boolean,
};

class JoinForm extends React.Component<null, State>{
  state = {
    fullname: '',
    email: '',
    year: '',
    major: '',

    formSubmitted: false,
    formError: false,
    formLoading: false,
  };

  /**
   * Encodes given state data into a uri component string
   */
  _encode = (data: {[key: string]: string}): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  /**
   * Manages changes to input and adjusts our component's state
   */
  _handleChange = (e: any) => {
    this.setState({[e.target.name]: e.target.value});
  }

  /**
   * Submits user data to Netlify and our custom server
   */
  _handleSubmit = (e: any) => {
    const {fullname, email, year} = this.state;

    e.preventDefault();

    this.setState({formLoading: true});

    // 1. Create mailing list subscription request.
    const mailRequest: any = {
      method: 'POST',
      headers: {
        'Origin': 'https://mailman.stanford.edu',
        contentType: 'application/json',                
      },
      body: JSON.stringify({
        'fullname': fullname,
        'email': email,
      }),
    };

    const mailPromise = fetch('https://saig-email-subscriber.herokuapp.com/subscribe', mailRequest);

    // 2. Create netlify form request.
    const netlifyRequest: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this._encode(
        Object.assign({
          'form-name': 'join-saig-submission',
        }, this.state),
      ),
    };

    const netlifyPromise = fetch('/', netlifyRequest);

    // 3. Send both, naively expect both to succeed
    Promise.all([mailPromise, netlifyPromise])
      .then(() => {
        this.setState({formSubmitted: true});
      })
      .catch(error => {
        this.setState({formError: true});

        console.error(error);
      });
  };

  _renderError = () => {
    const {fullname} = this.state;
  
    return (
      <div className="page">
        <div className="join__container">
          <div className="form__submitted">
            <h1>⚠️ There was an error!!</h1>
            <p>Please send a message to us on the SAIG Facebook Group to fix this. Do try again!</p>
          </div>
        </div>
      </div>
    );
  }

  _renderLoading = () => {
    return (
      <div className="page">
        <div className="join__container">
          <div className="form__spinner" />
        </div>
      </div>
    );
  }

  _renderSuccess = () => {
    const {fullname} = this.state;
  
    return (
      <div className="page">
        <div className="join__container">
          <div className="form__submitted">
            <h1>Thanks for joining SAIG, {fullname}!</h1>
            <p>Expect an email confirmation shortly asking you to join our mailing list. 😉</p>
          </div>
        </div>
      </div>
    );
  }

  _renderForm = () => {
    return (
      <div className="page">
        <div className="join__container">
          <form
            className="form"
            name="join-saig-submission"
            onSubmit={this._handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="join-saig-submission" />
            <div className="form__block">
              <label htmlFor="fullname">
                <h3>Name <small>* Required</small></h3>
              </label>
              <input id="fullname" type="text" onChange={this._handleChange} name="fullname" required placeholder="e.g., Machiney McLearnFace" />
            </div>
            <div className="form__block">
              <label htmlFor="email">
                <h3>Email <small>* Required</small></h3>
                <p>We'll invite you to our email list for news!</p>
              </label>
              <input id="email" type="email" onChange={this._handleChange} name="email" required placeholder="e.g., firstlast@stanford.edu" />
            </div>
            <div className="form__block">
              <label htmlFor="year">
                <h3>Class Year <small>* Required</small></h3>
              </label>
              <select
                id="year"
                className="form__year"
                name="year"
                onChange={this._handleChange}
                value={this.state.year}
                required
              >
                <option disabled value=""> -- select an option -- </option>
                <option value="freshman">Freshman</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="other">Other (Grad, PhD, etc.)</option>
              </select>
            </div>
            <div className="form__block">
              <label htmlFor="major">
                <h3>Major or Field of Study <small>* Required</small></h3>
                <p>If not applicable, put your area of interest.</p>
              </label>
              <input id="major" type="text" onChange={this._handleChange} name="major" required placeholder="e.g., Computer Science" />
            </div>
            <button className="form__submit" type="submit">Submit</button>
            <p className="form__subtext">
              <small>By submitting this form, you'll automatically be added to our mailing list.</small>
            </p>
          </form>
        </div>
      </div>
    );
  }

  render () {
    const {formSubmitted, formError, formLoading} = this.state;

    if (formError) {
      return this._renderError();
    } else if (formSubmitted) {
      return this._renderSuccess();
    } else if (formLoading) {
      return this._renderLoading();
    } else {
      return this._renderForm();
    }
  }
}

export default JoinForm;
