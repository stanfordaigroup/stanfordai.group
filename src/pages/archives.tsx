/**
 * Archives.tsx
 */

import * as React from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import Archives from "../components/Archives";
import PageHeader from "../components/PageHeader";
import Layout from "../components/layout";

type Props = {
  location: {
    pathname: string;
  };
};

const ArchivePage = (props: Props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <div className="page">
        <PageHeader
          title="Event Archives"
          subtitle={`To the best of our ability, we document our meetings and communications. If you missed a workshop or speaker, look here to catch up.`}
        />
        <br />
        <Archives />
      </div>
    </Layout>
  );
};

export default ArchivePage;
