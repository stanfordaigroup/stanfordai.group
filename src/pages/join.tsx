import * as React from 'react';
import JoinForm from '../components/JoinForm';
import PageHeader from '../components/PageHeader';

const SampleFormPage = () => {
  return (
    <div className="page">
      <PageHeader title="Join SAIG" subtitle={`If you're intrigued by AI in any way — whether it's the ethics, the implementations, or anything else — we're interested in you. ✌️`} />
      <br />
      <JoinForm />
    </div>
  );
};

export default SampleFormPage;
