"use client";

import { headerNavigation } from "../navigationItems";
import { motion } from "framer-motion";
import NavigationLink from "@/components/atoms/Links/NavigationLink/NavigationLink";

function DesktopNavigation() {
  return (
    <motion.div className="z-50">
      <div className="hidden md:flex rounded-full bg-white/90 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <nav className="flex px-3">
          {headerNavigation.map((page, index) => {
            return (
              <NavigationLink
                key={index}
                href={page.href || ""}
                name={page.name}
              />
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}

export default DesktopNavigation;
