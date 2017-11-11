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
};

class JoinForm extends React.Component<null, State>{
  state = {
    fullname: '',
    email: '',
    year: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const request: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode(
        Object.assign({
          'form-name': 'join',
        }, this.state),
      ),
    };

    fetch('/', request)
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    navigateTo('/welcome');
  };

  render () {
    return (
      <div className="page">
        <div className="join__container">
          <form
            className="form"
            name="join"
            action="/welcome"
            onSubmit={this.handleSubmit}
          >
            <div className="form__block">
              <label htmlFor="fullname">
                <h3>Name <small>* Required</small></h3>
              </label>
              <input id="fullname" type="text" onChange={this.handleChange} name="fullname" required placeholder="e.g., Machiney McLearnFace" />
            </div>
            <div className="form__block">
              <label htmlFor="email">
                <h3>Email <small>* Required</small></h3>
                <p>We'll invite you to our email list for news!</p>
              </label>
              <input id="email" type="email" onChange={this.handleChange} name="email" required placeholder="e.g., firstlast@stanford.edu" />
            </div>
            <div className="form__block">
              <label htmlFor="year">
                <h3>Class Year <small>* Required</small></h3>
              </label>
              <select
                id="year"
                className="form__year"
                name="year"
                onChange={this.handleChange}
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
}

export default JoinForm;
