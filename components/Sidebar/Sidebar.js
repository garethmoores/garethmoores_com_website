import React from 'react';
import Link from 'next/link';
import { TerminalIcon } from '../svg/TerminalIcon';
import { LinkedinIcon } from '../svg/LinkedinIcon';
import { GitHubIcon } from '../svg/GitHubIcon';

function Sidebar() {
    return (
      <div className="bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7">

        {/* Logo & Site Name */}
        <Link href="/">
            <a className="text-white flex items-center space-x-2">
                <TerminalIcon props={"h-8 w-8"} />
                <div className="text-2xl font-extrabold">
                    Gareth Moores
                </div>
            </a>
        </Link>

        {/* Subtitle */}
        <div className="px-4 font-light">
          Developer in Brisbane
        </div>

        {/* Navbar */}
        <nav className="pt-10">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
        </nav>

        {/* Contact Icons */}
        <ul className="flex flex-wrap px-6 pt-4">
            <ContactIcon href="https://www.linkedin.com/in/gareth-moores-7a692a79/">
                <LinkedinIcon props={"h-4 w-4"} />
            </ContactIcon>
            <ContactIcon href="https://github.com/garethmoores/">
                <GitHubIcon props={"h-4 w-4"} />
            </ContactIcon>
        </ul>

        {/* Copyright */}
         <div className="text-sm font-extralight px-4 pt-20">
             &copy; All rights reserved.
         </div>
      </div>

    );
}

function ContactIcon({ href, children }) {
    return (
      <a href={href} rel="nopener noreferrer" target="_blank">
        <li className="m-1 h-8 w-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400">
            {children}
        </li>
      </a>
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
