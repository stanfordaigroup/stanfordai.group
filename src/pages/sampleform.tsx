import * as React from 'react';
import Link from 'gatsby-link';

const SampleFormPage = () => {
  return (
    <div className="page">
      <form name="join" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="join__name">
          <label htmlFor="name">
            <h3>What's your name?</h3>
            <p>e.g., Machiney McLearnFace</p>
          </label>
          <input type="text" name="name" placeholder="Machiney McLearnFace" />
        </div>

        <div className="join__email">
          <label htmlFor="name">
            <h3>What's your email?</h3>
            <p>We'll invite you (optionally) to our email list for news!</p>
          </label>
          <input type="email" id="mail" name="user_email" placeholder="yourname@stanford.edu" />
        </div>

        <div className="join__classyear">
          <h3>Class Year</h3>
          <p>(if applicable)</p>
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
  );
}

export default SampleFormPage
