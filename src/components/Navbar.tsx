// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { FaCoins } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        MouthGuard DAO
      </Link>
      <div className="flex items-center space-x-8">
        <Link href="/research" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Research
        </Link>
        <Link href="/technology" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Technology
        </Link>
        <Link href="/ecosystem" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Ecosystem
        </Link>
        <Link href="/mouth" className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <FaCoins className="text-yellow-500" />
          <span>$Mouth</span>
        </Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
