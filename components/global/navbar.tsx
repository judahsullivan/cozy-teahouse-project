import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <motion.img src="https://images.squarespace-cdn.com/content/v1/5b6be52f3e2d099c921994d4/1593147047370-0BFJIJW6EC7G5AIM3FHA/ke17ZwdGBToddI8pDm48kHxZW8G9yQIB8WDax7xpbxxZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Wt5K3jmsiBpJAJjNxwpFT48K2g_wJ5Tvrry30-swdfDUdj1yWJm5f7xpqDxWrxJCQ/Tea-Cosy_logo_2018_WHITE.png" alt="Logo" className="h-8 w-8 mr-2 text-white cursor-pointer" />
          </Link>
        </div>
        <div  className="hidden md:flex space-x-4 text-2xl">
          <Link href="#tea-of-the-month">
            <motion.span whileHover={{scale: 1.1}} whileTap={{scale: .97}}className="cursor-pointer hover:text-gray-300">Tea of the Month</motion.span>
          </Link>
          <Link href="#locations">
            <motion.span whileHover={{scale: 1.1}} whileTap={{scale: .97}}className="cursor-pointer hover:text-gray-300">Locations</motion.span>
          </Link>
          <Link href="#contact">
            <motion.span whileHover={{scale: 1.1}} whileTap={{scale: .97}}className="cursor-pointer hover:text-gray-300">Contact</motion.span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:text-gray-300"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="#tea-of-the-month">
            <span className="block cursor-pointer hover:text-gray-300">Tea of the Month</span>
          </Link>
          <Link href="#locations">
            <span className="block cursor-pointer hover:text-gray-300">Locations</span>
          </Link>
          <Link href="#contact">
            <span className="block cursor-pointer hover:text-gray-300">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
