import * as React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Archives from '../components/Archives';
import PageHeader from '../components/PageHeader';

const ArchivePage = () => {
  return (
    <div className="page">
      <PageHeader title="Event Archives" subtitle={`To the best of our ability, we document our meetings and communications. If you missed a workshop or speaker, look here to catch up.`} />
      <br />
      <Archives />
    </div>
  );
}

export default ArchivePage
