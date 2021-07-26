import React from 'react';

function PageBody(props) {
    return (
        <div className="flex-1 px-10 py-24 md:ml-64 md:px-20 md:py-14 text-base font-normal">
            {props.children}
        </div>
    );
}

export default PageBody;