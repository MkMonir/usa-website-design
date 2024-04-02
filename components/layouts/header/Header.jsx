'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/assets/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`shadow bg-white w-full sticky top-0 z-50`}>
      <div className="container">
        <div className="flex items-center justify-between gap-12 w-full py-5 lg:py-0">
          {/* LOGO */}
          <Link href="#home">
            <Image src={Logo} alt="Logo" />
          </Link>

          {/* MENU OPEN AND CLOSE BUTTON */}
          <button
            className="block lg:hidden text-4xl text-gray"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* NAVBAR START */}
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {/* NAVBAR END */}
        </div>
      </div>
    </header>
  );
};

export default Header;
