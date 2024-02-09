"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { navStyles } from "@/components/molecules/Navigation/navigationItems";

interface NavLink {
  href?: string;
  name: string;
}

function NavigationLink({ href, name }: NavLink) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={clsx(navStyles)}>
      <Link href={href || "/"} aria-current={"page"}>
        {name}
      </Link>
    </motion.div>
  );
}

export default NavigationLink;
