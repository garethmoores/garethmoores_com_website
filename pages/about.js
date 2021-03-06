import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';
import {MobileBarBottom, MobileBarTop} from "../components/MobileBar";

export default function About() {
    return (
        <Layout title="GarethMoores.com: About Me" description="GarethMoores.com: About Me">
          <MobileBarTop />
          <Sidebar />
          <PageBody title="About Me">
            <p>I&apos;m Gareth, a developer working in Brisbane, Australia.</p>
          </PageBody>
          <MobileBarBottom />
        </Layout>
    );
};