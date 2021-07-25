import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

export default function About() {
    return (
        <Layout title="GarethMoores.com" description="GarethMoores.com">
            <Sidebar />
            <Page>
                About Page
            </Page>
        </Layout>
    );
};