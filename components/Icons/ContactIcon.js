import React from 'react';

export function ContactIcon({ href, styling, children }) {
  return (
    <div className={`${styling} m-1 bg-white rounded-full flex items-center justify-center border-2 border-gray-400`}>
      <a href={href} className="text-white no-underline" rel="nopener noreferrer" target="_blank">
        {children}
      </a>
    </div>
  );
}
