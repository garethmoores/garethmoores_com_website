import React from 'react';
import Link from 'next/link';
import { ContactIcon, TerminalIcon, GitHubIcon, LinkedinIcon } from '../Icons';
import Copyright from '../Copyright';

export function MobileBarTop() {
  return (
    <nav className="fixed w-full top-0 bg-gray-800 text-gray-100 flex justify-between md:hidden">
      {/* Logo and Site Name */}
      <Link href="/">
        <a className="block p-4 text-white font-bold flex no-underline">
          <span className="pt-1">
            <TerminalIcon props={"h-4 w-4"} />
          </span>
          <span className="pl-3">
            Gareth Moores
          </span>
        </a>
      </Link>
      <span className="font-light text-sm pl-8 pt-5">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </span>
    </nav>
  )
}

export function MobileBarBottom() {
  return (
    <nav className="fixed pb-2 bottom-0 inset-x-0 bg-gray-800 text-gray-100 md:hidden content-center items-center">
      <div className="flex flex-wrap px-6 pt-4 justify-between items-center">
        <span className="flex pl-4">
          <ContactIcon href="https://www.linkedin.com/in/gareth-moores-7a692a79/" styling="h-6 w-6">
            <LinkedinIcon props={"h-3 w-3"} />
          </ContactIcon>
          <ContactIcon href="https://github.com/garethmoores/" styling="h-6 w-6">
            <GitHubIcon props={"h-3 w-3"} />
          </ContactIcon>
        </span>
        <Copyright props="text-sm font-extralight px-4" />
      </div>
    </nav>
  )
}

function NavItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-gray-100 py-2 px-4 rounded transition duraction-200 hover:bg-white hover:text-black no-underline">
        {children}
      </a>
    </Link>
  );
}
