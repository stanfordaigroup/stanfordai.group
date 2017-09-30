import * as React from 'react';
import Helmet from 'react-helmet';
import PageHeader from '../components/PageHeader';

import './PermalinkPage.scss';

type Props = {
  data: any,
};

const Template: React.StatelessComponent<Props> = props => {
  const { data } = props; // data.markdownRemark holds our post data

  const post = data.markdownRemark;

  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} – Student AI Group (SAIG)`}
      />
      <div>
        <PageHeader title={post.frontmatter.title} subtitle={post.frontmatter.subtitle} />
        <div
          className="permalinkPage__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
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