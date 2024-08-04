// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-[#1E2019] py-2 flex justify-between items-center px-4">
      <Link href="/" legacyBehavior>
        <a className="inline-block">
          <h1 className=" text-2xl  ml-36 font-black  p-7 cursor-pointer text-[#CFEE9E]">BetterPrompt.AI</h1>
        </a>
      </Link>
      <div className="flex space-x-10 pr-20 mr-36 font-bold text-white text-lg">
        <Link href="/payment" legacyBehavior>
          <a className="inline-block">
            <p >Plans</p>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="inline-block">
            <p >Settings</p>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="inline-block">
            <p >Sign In</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
