"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ModeToggle } from "@/components";

interface NavLink {
  key: number | string;
  href: string;
  isAnchorLink?: boolean;
  children?: ReactNode;
}

function NavLink({ key, href, isAnchorLink = false, children }: NavLink) {
  return (
    <Link
      key={key}
      href={href}
      aria-current={"page"}
      className={clsx(
        "flex justify-between gap-1 py-3 pr-2 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
        isAnchorLink ? "pl-7" : "pl-4"
      )}
    >
      <span className="truncate"> {children} </span>
    </Link>
  );
}

const headerNavigation = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/names",
    label: "Names",
  },
];

function NavigationGroup() {
  return (
    <motion.div>
      <div className="hidden md:block rounded-full bg-white/90 px-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <nav className="flex items-center px-2">
          {headerNavigation.map((link, index) => {
            return (
              <NavLink key={index} href={link.path} children={link.label} />
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}

export function Header() {
  const [mounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!mounted) return null;

  //need to show menu whenver under medium width
  return (
    <header className="flex items-center justify-between p-6 bg-black-500 text-white">
      <div className="flex items-center">
        <p> Heyo</p>
      </div>
      <NavigationGroup />
      <ModeToggle />
    </header>
  );
}
