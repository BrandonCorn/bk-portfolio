"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function MoonIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  );
}

export function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  const { theme, setTheme } = useTheme();

  function toggleMode() {
    disableTransitionsTemporarily();
    const setter = theme === "light" ? "dark" : "light";
    setTheme(setter);
  }

  return (
    <button
      type="button"
      className="cursor-pointer rounded-full group bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      aria-label="Toggle dark mode"
      onClick={toggleMode}
    >
      <SunIcon className="w-9 h-9 stroke-zinc-500 dark:hidden fill-zinc-100 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden w-9 h-9 fill-zinc-700 stroke-zinc-700 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover-stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
}
