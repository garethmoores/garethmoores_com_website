import React from 'react';

function Page(props) {
    return (
        <div className="flex-1 p-10 text-base font-normal">
            {props.children}
        </div>
    );
}

export default Page;