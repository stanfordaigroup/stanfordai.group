import * as React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import HeaderPermalink from '../components/HeaderPermalink';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

import './index.css';
import './normalize.css';

type Props = {
  children: () => {},
  location: {
    pathname: string,
  },
};

const TemplateWrapper: React.StatelessComponent<Props> = props => {
  const {location} = props;

  return (
    <div>
      <Helmet title="Student AI Group (SAIG)" />
      {location.pathname === '/' ? <Header /> : <HeaderPermalink pathname={location.pathname} />}
      {props.children()}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
