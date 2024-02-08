"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ModeToggle } from "@/components";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface NavLink {
  href: string;
  label?: string;
}

const navStyles =
  "flex px-2 py-3 cursor-pointer transition text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-500";

function NavLink({ href, label }: NavLink) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={clsx(navStyles)}>
      <Link href={href} aria-current={"page"}>
        {label}
      </Link>
    </motion.div>
  );
}

interface NavButton {
  label: string;
  onClick: () => void;
}

function NavButton({ label, onClick }: NavButton) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      className={clsx(navStyles)}
    >
      {label}
    </motion.button>
  );
}

type NavigationItem = {
  path: string;
  label: string;
  onClick?: () => void;
};

const headerNavigation: NavigationItem[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/skills",
    label: "Skills",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

function NavigationGroup() {
  const { status } = useSession();
  const [paths, setPaths] = useState(headerNavigation);

  useEffect(() => {
    const signOutPath = {
      path: "/auth/signout",
      label: "Sign Out",
      onClick: signOut,
    };
    if (status === "authenticated") {
      setPaths((prevState) => [...prevState, signOutPath]);
    } else if (status === "unauthenticated") {
      setPaths((prevState) =>
        prevState.filter((item) => item.path !== "/auth/signout")
      );
    }
  }, [status]);

  return (
    <motion.div>
      <div className="hidden md:flex rounded-full bg-white/90 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <nav className="flex px-3">
          {paths.map((page, index) => {
            if (page.path === "/auth/signout" && page.onClick) {
              return (
                <NavButton
                  key={index}
                  label={page.label}
                  onClick={page.onClick}
                />
              );
            } else {
              return (
                <NavLink key={index} href={page.path} label={page.label} />
              );
            }
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
    <header className="grid grid-cols-3 items-center justify-between p-6 bg-black-500 text-white w-full">
      <div className="flex items-center justify-start">
        <Image
          src={"/personal-logo.jpeg"}
          alt="Personal Logo"
          width={50}
          height={50}
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
