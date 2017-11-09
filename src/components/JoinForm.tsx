import * as React from 'react';
import Link from 'gatsby-link';

type State = {
  name: string,
  email: string,
};

function encode(data: any) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class JoinForm extends React.Component<null, State> {
  state = {
    name: '',
    email: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...this.state })
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error));

    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode(Object.assign({
        'form-name': 'join',
      }, this.state))
    };

    fetch('/', request)
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    console.log(request);

    e.preventDefault();
  };

  render () {
    return (
      <div className="page">
        <div className="join__container">
          <form
            name="join"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="join__name">
              <label htmlFor="name">
                <h3>What's your name?</h3>
                <p>e.g., Machiney McLearnFace</p>
              </label>
              <input type="text" name="name" placeholder="Machiney McLearnFace" onChange={this.handleChange} required />
            </div>
    
            <div className="join__email">
              <label htmlFor="name">
                <h3>What's your email?</h3>
                <p>We'll invite you (optionally) to our email list for news!</p>
              </label>
              <input type="email" id="mail" name="email" placeholder="yourname@stanford.edu" onChange={this.handleChange} required />
            </div>
    
            <div className="join__classyear">
              <h3>Class Year</h3>
              <label htmlFor="freshman">Freshman</label>
              <input type="radio" name="class-year" id="freshman" value="Freshman" />
              <label htmlFor="sophomore">Sophomore</label>
              <input type="radio" name="class-year" id="sophomore" value="Sophomore" />
              <label htmlFor="junior">Junior</label>
              <input type="radio" name="class-year" id="junior" value="Junior" />
              <label htmlFor="senior">Senior</label>
              <input type="radio" name="class-year" id="senior" value="Senior" />
              <label htmlFor="other">Other</label>
              <input type="text" name="class-year" id="other"/>
            </div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default JoinForm;
