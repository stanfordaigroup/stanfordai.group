/**
 * PermalinkPage.tsx
 */

import * as React from "react";
import Helmet from "react-helmet";
import PageHeader from "../components/PageHeader";
import Layout from "../components/layout";
import {graphql} from 'gatsby';

import "./PermalinkPage.scss";

type Props = {
  data: any;
  location: {
    pathname: string;
  };
};

const PermalinkPageTemplate: React.StatelessComponent<Props> = props => {
  const { data, location } = props; // data.markdownRemark holds our post data

  const post = data.markdownRemark;

  return (
    <Layout location={location}>
      <Helmet title={`${post.frontmatter.title} – Student AI Group (SAIG)`} />
      <div>
        <PageHeader
          title={post.frontmatter.title}
          subtitle={post.frontmatter.subtitle}
        />
        <div
          className="permalinkPage__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default PermalinkPageTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
      }
    }
  }
`;
