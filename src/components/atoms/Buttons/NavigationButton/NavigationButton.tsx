"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { navStyles } from "@/components/molecules/Navigation/navigationItems";

interface NavButton {
  name: string;
  onClick: () => void;
}

function NavigationButton({ name, onClick }: NavButton) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      className={clsx(navStyles)}
    >
      {name}
    </motion.button>
  );
}

export default NavigationButton;
