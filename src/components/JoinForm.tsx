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
            }}
            onSubmit={(values, { setSubmitting,  setErrors, setStatus /* setValues and other goodies */ }) => {
              // Create request to subscribe to mailman
              // Mimicking: https://mailman.stanford.

              const payload = JSON.stringify({
                'fullname': values.fullname,
                'email': values.email,
              });

              const request: any = {
                method: 'POST',
                headers: {
                  'Origin': 'https://mailman.stanford.edu',
                  contentType: 'application/json',                
                },
                body: payload,
              };

              fetch('https://saig-email-subscriber.herokuapp.com/subscribe', request)
                .then((res: any) => {
                  setSubmitting(false);
                  setStatus('submitted');
                })
                .catch((error: any) => {});
            }}
            render={({ status, values, errors, isSubmitting }) => {
              if (status === 'submitted') {
                return (
                  <div className="form__submitted">
                    <h1>Thanks for joining SAIG, {values.fullname}!</h1>
                    <p>Expect an email confirmation shortly asking you to join our mailing list. 😉</p>
                  </div>
                );
              } else {
                return (
                  <Form>
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
                    <button className="form__submit" type="submit" disabled={isSubmitting}>Submit</button>
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
