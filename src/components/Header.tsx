import Link from "next/link";
import React from "react";

const links = [
  {
    title: "home",
    url: "/home",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "contact",
    url: "/contact",
  },
];

const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full h-[var(--header-size)] text-white flex items-center">
      <nav className="container flex items-center gap-8">
        {links.map((lnk, i) => (
          <Link key={i} href={lnk.url} className="capitalize font-medium text-lg">
            {lnk.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
