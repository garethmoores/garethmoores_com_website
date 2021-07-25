import React from 'react';
import Link from 'next/link';

function Sidebar() {
    return (
      <div className="bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7">

        {/* Logo */}
        <Link href="/">
            <a className="text-white flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div className="text-2xl font-extrabold">
                    Gareth Moores
                </div>
            </a>
        </Link>
        <div className="px-4 font-light">
          Developer in Brisbane
        </div>

        {/* Navbar */}
        <nav className="pt-10">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
        </nav>
      </div>

    );
}

function NavItem({ href, children }) {
    return (
        <Link href={href}>
            <a className="block py-2.5 px-4 rounded transition duraction-200 hover:bg-blue-700 hover:text-white">{children}</a>
        </Link>
    );
}

export default Sidebar;
