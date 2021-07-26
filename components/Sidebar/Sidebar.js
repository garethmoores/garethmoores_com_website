import React from 'react';
import Link from 'next/link';
import { ContactIcon, TerminalIcon, GitHubIcon, LinkedinIcon } from '../Icons';
import Copyright from '../Copyright';

function Sidebar() {
  return (
    <nav className="bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 fixed inset-y-0 left-0 transform
          -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">

      {/* Logo & Site Name */}
      <Link href="/">
          <a className="text-white flex items-center space-x-2 no-underline">
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
          <NavItem href="/contact">Contact</NavItem>
      </nav>

      {/* Contact Icons */}
      <ul className="flex flex-wrap px-6 pt-4">
          <li>
              <ContactIcon href="https://www.linkedin.com/in/gareth-moores-7a692a79/" styling="h-8 w-8">
                  <LinkedinIcon props={"h-4 w-4"} />
              </ContactIcon>
          </li>
          <li>
              <ContactIcon href="https://github.com/garethmoores/" styling="h-8 w-8">
                  <GitHubIcon props={"h-4 w-4"} />
              </ContactIcon>
          </li>
      </ul>

      <Copyright props="text-sm font-extralight px-4 pt-20" />
    </nav>
  );
}

function NavItem({ href, children }) {
    return (
        <Link href={href}>
            <a className="text-white block py-2.5 px-4 rounded transition duraction-200 hover:bg-blue-700 hover:text-white no-underline">
              {children}
            </a>
        </Link>
    );
}

export default Sidebar;