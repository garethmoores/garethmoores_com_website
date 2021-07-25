import React from 'react';

function PageBody(props) {
    return (
        <div className="flex-1 p-10 text-base font-normal">
            {props.children}
        </div>
    );
}

export default PageBody;