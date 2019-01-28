/**
 * Events.tsx
 */

import * as React from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import PageHeader from "../components/PageHeader";
import Layout from "../components/layout";

type Props = {
  location: {
    pathname: string;
  };
};

const EventPage = (props: Props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <div className="page">
        <PageHeader
          title="Upcoming Events"
          subtitle={`All of SAIG's events are open to the public. Unless otherwise specified below, there are no requirements or preparations required before you come!`}
        />
        <br />
        <Calendar />
      </div>
    </Layout>
  );
};

export default EventPage;
