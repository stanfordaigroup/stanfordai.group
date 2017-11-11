import * as React from 'react';
import Link, {navigateTo} from 'gatsby-link';

import './JoinForm.scss';

function encode(data: any) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
}

type State = {
  fullname: string,
  email: string,
  year: string,

  formSubmitted: boolean,
  formError: boolean,
};

class JoinForm extends React.Component<null, State>{
  state = {
    fullname: '',
    email: '',
    year: '',

    formSubmitted: false,
    formError: false,
  };

  _handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  _handleSubmit = e => {
    e.preventDefault();

    const request: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode(
        Object.assign({
          'form-name': 'join-saig',
        }, this.state),
      ),
    };

    fetch('/', request)
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
            name="join-saig"
            onSubmit={this._handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="join-saig" />
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
            <button className="form__submit" type="submit">Submit</button>
            <p className="form_subtext">
              <small>By submitting this form, you'll automatically be added to our mailing list.</small>
            </p>
          </form>
        </div>
      </div>
    );
  }

  render () {
    const {formSubmitted, formError} = this.state;

    if (formError) {
      return this._renderError();
    } else if (formSubmitted) {
      return this._renderSuccess();
    } else {
      return this._renderForm();
    }
  }
}

export default JoinForm;
