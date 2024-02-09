"use client";

import { headerNavigation } from "../navigationItems";
import { motion } from "framer-motion";
import NavigationLink from "@/components/atoms/Links/NavigationLink/NavigationLink";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import NavigationButton from "@/components/atoms/Buttons/NavigationButton/NavigationButton";

function DesktopNavigation() {
  const { status } = useSession();
  const [paths, setPaths] = useState(headerNavigation);

  useEffect(() => {
    const tempPaths = [...headerNavigation];
    if (status === "authenticated") {
      tempPaths.push({ name: "Sign Out", href: "/auth/signout" });
    } else {
      tempPaths.push({ name: "Sign In", href: "/auth/signin" });
    }
    tempPaths.push({ name: "Sign Up", href: "/auth/signup" });
    setPaths(tempPaths);
  }, [status]);

  return (
    // <motion.div className="z-50">
    <div className="hidden md:flex rounded-full bg-white/90 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <nav className="flex px-3">
        {paths.map((page, index) => {
          if (page.href === "/auth/signout") {
            return (
              <NavigationButton
                key={index}
                onClick={() => signOut()}
                name={page.name}
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
    // </motion.div>
  );
}

export default DesktopNavigation;
