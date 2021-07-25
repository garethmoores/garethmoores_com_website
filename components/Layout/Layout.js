import React from 'react';
import Head from 'next/head';

function Layout(props) {
    return (
        <div className="">
            <Head>
                <html lang="en" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div className="relative min-h-screen flex">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;