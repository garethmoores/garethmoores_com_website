import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';

export default function About() {
  return (
    <Layout title="GarethMoores.com: Thank-you" description="GarethMoores.com: Thank-you">
      <Sidebar />
      <PageBody>
        <p className="font-bold text-xl pb-4">Thank-you for submitting the form.</p>
        <Link href="/"><a className="text-xl ">Return Home</a></Link>
      </PageBody>
    </Layout>
  );
};