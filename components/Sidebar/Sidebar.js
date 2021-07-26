import React from 'react';
import Link from 'next/link';
import { TerminalIcon } from '../svg/TerminalIcon';
import { LinkedinIcon } from '../svg/LinkedinIcon';
import { GitHubIcon } from '../svg/GitHubIcon';
import {MenuIcon} from "../svg/MenuIcon";

function Sidebar() {
  const {sidebar} = document.querySelector(".sidebar");

  function handleMobileButton() {
    sidebar.classList.toggle("-translate-x-full");
  }

  return (
    <div>
      {/* Mobile Bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
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

          {/* Mobile Menu Button */}
          <button className="p-4 focus:outline-none focus:bg-gray-700" onClick={handleMobileButton}>
              <MenuIcon props={"h-5 w-5"} />
          </button>
        </div>

      {/* Side Bar */}
      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform
            -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

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
    </div>

  );
}

function ContactIcon({ href, children }) {
    return (
      <a href={href} className="text-white no-underline" rel="nopener noreferrer" target="_blank">
        <li className="m-1 h-8 w-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400">
            {children}
        </li>
      </a>
    );
}

function NavItem({ href, children }) {
    return (
        <Link href={href}>
            <a className="text-white block py-2.5 px-4 rounded transition duraction-200 hover:bg-blue-700 hover:text-white no-underline">{children}</a>
        </Link>
    );
}

export default Sidebar;
