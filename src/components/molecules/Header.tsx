"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ModeToggle } from "@/components";
import { usePathname } from "next/navigation";
import PersonalLogo from "../../../public/personal-logo.jpeg";

interface NavLink {
  // index: number | string;
  href: string;
  isAnchorLink?: boolean;
  children?: ReactNode;
}

function NavLink({ href, isAnchorLink = false, children }: NavLink) {
  return (
    <motion.button whileHover={{ scale: 1.1 }}>
      <Link
        href={href}
        aria-current={"page"}
        className={clsx(
          "flex justify-between gap-1 py-3 pr-2 text-sm transition text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-500",
          isAnchorLink ? "pl-7" : "pl-4"
        )}
      >
        <span className="truncate"> {children} </span>
      </Link>
    </motion.button>
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
    path: "/skills",
    label: "Skills",
  },
  {
    path: "/interview",
    label: "Interview",
  },
  // {
  //   path: "/admin",
  //   label: "Admin",
  // },
];

function NavigationGroup() {
  return (
    <motion.div>
      <div className="hidden md:flex rounded-full bg-white/90 px-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <nav className="flex items-center justify-center px-2">
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
  const path = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!mounted) return null;

  //need to show menu whenver under medium width
  return (
    <header className="grid grid-cols-3 items-center justify-between p-6 bg-black-500 text-white">
      <div className="flex items-center justify-start">
        <Image
          src={PersonalLogo}
          alt="Personal Logo"
          width={50}
          className={clsx(
            "object-fill rounded-full",
            path !== "/" ? "visible" : "hidden"
          )}
        />
      </div>
      <div className="flex items-center justify-center">
        <NavigationGroup />
      </div>
      <div className="flex items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
