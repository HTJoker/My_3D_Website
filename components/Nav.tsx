"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
  const pathname = usePathname();


  return (
    <header>
      <nav className=" flex w-screen items-center justify-between p-4 shadow-lg">
        <div className="rounded-lg bg-gradient-to-tr from-purple-700 to-emerald-400 shadow-md">
          <Link href="/">
            <h1 className="m-1 font-semibold text-slate-100">HT</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link
            href={`/about`}
            className={pathname === "/about" ? "text-purple-700" : "text-black"}
          >
            About
          </Link>
          <Link
            href={`/contact`}
            className={
              pathname === "/contact" ? "text-purple-700" : "text-black"
            }
          >
            Contact
          </Link>
          <Link
            href={`/gallery`}
            className={
              pathname === "/gallery" ? "text-purple-700" : "text-black"
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
