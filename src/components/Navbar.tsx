// src/components/Navbar.tsx
"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        MouthGuard DAO
      </Link>
      <ConnectButton />
    </nav>
  );
}
