"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { headerNavigation, NavigationItem } from "../navigationItems";
import { motion } from "framer-motion";
import NavigationButton from "@/components/atoms/Buttons/NavigationButton/NavigationButton";
import NavigationLink from "@/components/atoms/Links/NavigationLink/NavigationLink";

function DesktopNavigation() {
  const { status } = useSession();
  const [paths, setPaths] = useState(headerNavigation);

  useEffect(() => {
    const signOutPath: NavigationItem = {
      name: "Sign Out",
      onClick: signOut,
      href: "/auth/signout",
    };
    if (status === "authenticated") {
      setPaths((prevState) => [...prevState, signOutPath]);
    } else if (status === "unauthenticated") {
      setPaths((prevState) =>
        prevState.filter((item) => item.href !== "/auth/signout")
      );
    }
  }, [status]);

  return (
    <motion.div className="z-50">
      <div className="hidden md:flex rounded-full bg-white/90 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <nav className="flex px-3">
          {paths.map((page, index) => {
            if (page.href === "/auth/signout" && page.onClick) {
              return (
                <NavigationButton
                  key={index}
                  name={page.name}
                  onClick={page.onClick}
                />
              );
            } else {
              return (
                <NavigationLink
                  key={index}
                  href={page.href || ""}
                  name={page.name}
                />
              );
            }
          })}
        </nav>
      </div>
    </motion.div>
  );
}

export default DesktopNavigation;
