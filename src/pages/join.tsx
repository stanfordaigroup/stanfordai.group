/**
 * join.tsx
 */

import * as React from "react";
import JoinForm from "../components/JoinForm";
import PageHeader from "../components/PageHeader";
import Layout from "../components/layout";

type Props = {
  location: {
    pathname: string;
  };
};

const SampleFormPage = (props: Props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <div className="page">
        <PageHeader
          title="Join SAIG"
          subtitle={`If you're intrigued by AI in any way — whether it's the ethics, the implementations, or anything else — we're interested in you. ✌️`}
        />
        <br />
        <JoinForm />
      </div>
    </Layout>
  );
};

export default SampleFormPage;
