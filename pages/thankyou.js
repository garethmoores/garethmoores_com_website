import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';
import {MobileBarBottom, MobileBarTop} from "../components/MobileBar";

function ThankYou() {
  return (
    <Layout title="GarethMoores.com: Thank-you" description="GarethMoores.com: Thank-you">
      <MobileBarTop />
      <Sidebar />
      <PageBody>
        <p className="font-bold text-xl pb-4">Thank-you for submitting the form.</p>
        <Link href="/"><a className="text-xl ">Return Home</a></Link>
      </PageBody>
      <MobileBarBottom />
    </Layout>
  );
}

export default ThankYou;