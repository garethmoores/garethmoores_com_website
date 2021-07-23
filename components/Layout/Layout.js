import React from 'react';
import Helmet from 'react-helmet';

function Layout(props) {
    return (
        <div className="">
            <Helmet>
                <html lang="en" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            {props.children}
        </div>
    );
};

export default Layout;