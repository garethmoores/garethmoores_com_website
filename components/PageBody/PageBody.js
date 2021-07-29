import React from 'react';

function PageBody(props) {
    return (
        <div className="flex-1 px-10 py-24 md:ml-64 md:px-20 md:py-14 text-base font-normal">
          <h1>
            {props.title}
          </h1>
          <p className="text-nice-orange font-medium">{props.date}</p>
          <div className="pt-6">
            {props.children}
          </div>
        </div>
    );
}

export default PageBody;