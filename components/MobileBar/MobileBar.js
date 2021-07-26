import React from 'react';
import Link from 'next/link';
import { TerminalIcon } from '../svg/TerminalIcon';
import { MenuIcon } from '../svg/MenuIcon';

function MobileBar() {
  return (
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
      <button className="p-4 focus:outline-none focus:bg-gray-700">
        <MenuIcon props={"h-5 w-5"} />
      </button>

    </div>
  )
}

export default MobileBar;