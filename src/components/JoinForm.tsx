import * as React from 'react';
import Link from 'gatsby-link';
import {Formik, Form, Field} from 'formik';

import './JoinForm.scss';

function encode(data: any) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class JoinForm extends React.Component{
  render () {
    return (
      <div className="page">
        <div className="join__container">
          <Formik
            initialValues={{
              fullname: '',
              email: '',
              year: '',
            }}
            onSubmit={(values, { setSubmitting,  setErrors, setStatus /* setValues and other goodies */ }) => {
              // Create request to subscribe to mailman
              // Mimicking: https://mailman.stanford.

              const mailPayload = JSON.stringify({
                'fullname': values.fullname,
                'email': values.email,
              });

              const mailRequest: any = {
                method: 'POST',
                headers: {
                  'Origin': 'https://mailman.stanford.edu',
                  contentType: 'application/json',                
                },
                body: mailPayload,
              };

              const mailSubscription = fetch('https://saig-email-subscriber.herokuapp.com/subscribe', mailRequest)
                .then((res: any) => {})
                .catch(error => console.error(error));

              const netlifyRequest: any = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                  'form-name': 'join',
                  'fullname': values.fullname,
                  'email': values.email,
                  'year': values.year,
                }),
              };

              const netlifyLogging = fetch("/", netlifyRequest)
                .then(() => {})
                .catch(error => console.error(error));

              Promise
                .all([mailSubscription, netlifyLogging])
                .then(() => {
                  setSubmitting(false);
                  setStatus('submitted');
                });
            }}
            render={({ status, values, errors, isSubmitting, handleBlur, handleChange }) => {
              if (status === 'submitted') {
                return (
                  <div className="form__submitted">
                    <h1>Thanks for joining SAIG, {values.fullname}!</h1>
                    <p>Expect an email confirmation shortly asking you to join our mailing list. 😉</p>
                  </div>
                );
              } else {
                return (
                  <Form
                    className="form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="form__block">
                      <label htmlFor="fullname">
                        <h3>Name <small>* Required</small></h3>
                      </label>
                      <Field id="fullname" type="text" name="fullname" required placeholder="e.g., Machiney McLearnFace" />
                    </div>
                    <div className="form__block">
                      <label htmlFor="email">
                        <h3>Email <small>* Required</small></h3>
                        <p>We'll invite you to our email list for news!</p>
                      </label>
                      <Field id="email" type="email" name="email" required placeholder="e.g., firstlast@stanford.edu" />
                    </div>
                    <div className="form__block">
                      <label htmlFor="year">
                        <h3>Class Year <small>* Required</small></h3>
                      </label>
                      <select
                        id="year"
                        className="form__year"
                        name="year"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.year}
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
                    <button className="form__submit" type="submit" disabled={isSubmitting}>Submit</button>
                    <p className="form_subtext">
                      <small>By submitting this form, you'll automatically be added to our mailing list.</small>
                    </p>
                  </Form>
                );
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default JoinForm;
