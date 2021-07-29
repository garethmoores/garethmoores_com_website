import React from 'react';
import Head from 'next/head';

function Layout(props) {
    return (
        <div className="">
            <Head>
              <title>{props.title}</title>
              <meta name="description" content={props.description} />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
            </Head>
            <div className="relative min-h-screen md:flex">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;