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
          validate={values => {
            // same as above, but feel free to move this into a class method now.
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting,  setErrors, /* setValues and other goodies */ }) => {

            // Create request to subscribe to mailman
            // Mimicking: https://mailman.stanford.
            

            // POST /mailman/subscribe/saig-announce HTTP/1.1
            // Host: mailman.stanford.edu
            // Connection: keep-alive
            // Content-Length: 83
            // Cache-Control: max-age=0
            // Origin: https://mailman.stanford.edu
            // Upgrade-Insecure-Requests: 1
            // Content-Type: application/x-www-form-urlencoded
            // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36
            // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
            // Referer: https://mailman.stanford.edu/mailman/listinfo/saig-announce
            // Accept-Encoding: gzip, deflate, br
            // Accept-Language: en-US,en;q=0.8

            const request = {
              method: 'POST',
              headers: {
                // 'Host': 'mailman.stanford.edu',
                // 'Connection': 'keep-alive',
                // 'Origin': 'https://mailman.stanford.edu',
                // 'Upgrade-Insecure-Requests': 1,
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
              },
              body: encode(Object.assign({
                'digest': 0,
                'email-button': 'Subscribe',
              }, values))
            };

            fetch('https://mailman.stanford.edu/mailman/listinfo/saig-announce', request)
              .then(() => console.log('success'))
              .catch(error => console.error(error));

            console.log(request);
          }}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
            <Form>
              <div className="form__block">
                <label htmlFor="fullname">
                  <h3>Name <small>* Required</small></h3>
                </label>
                <Field id="fullname" type="text" name="fullname" placeholder="e.g., Machiney McLearnFace" />
              </div>
              <div className="form__block">
                <label htmlFor="email">
                  <h3>Email <small>* Required</small></h3>
                  <p>We'll invite you to our email list for news!</p>
                </label>
                <Field id="email" type="email" name="email" placeholder="e.g., firstlast@stanford.edu" />
              </div>
              <button className="form__submit" type="submit" disabled={isSubmitting}>Submit</button>
            </Form>}
          />
        </div>
      </div>
    );
  }
}

export default JoinForm;
