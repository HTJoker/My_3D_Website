import Link from "next/link";
const Nav = () => {
  return (
    <header>
      <nav className=" w-screen flex items-center justify-between shadow-lg p-4">
        <div className="rounded-lg bg-gradient-to-tr from-purple-700 to-emerald-400 shadow-md">
          <Link href="/">
            <h1 className="m-1 font-semibold text-slate-100">HT</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href={`/about`}>About</Link>
          <Link href={`/contact`}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
