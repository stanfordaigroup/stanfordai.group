/**
 * 404.tsx
 * -> Renders whenever a user encounters a 404
 */

import * as React from "react";
import Layout from "../components/layout";

import "./404.scss";

type Props = {
  location: {
    pathname: string;
  };
};

const NotFoundPage = (props: Props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <div className="pageNotFound__container">
        <h2 className="pageNotFound__subtitle">404</h2>
        <h2 className="pageNotFound__title">Page Not Found</h2>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <p>🚧</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
