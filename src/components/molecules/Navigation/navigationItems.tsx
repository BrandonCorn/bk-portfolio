import { signOut } from "next-auth/react";

/**
 * styles for Desktop NavigationButton and NavigationLink
 */
export const navStyles =
  "flex px-2 py-3 cursor-pointer transition text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-500";

export type NavigationItem = {
  name: string;
  href: string;
  description?: string;
  onClick?: () => void;
};

export const headerNavigation: NavigationItem[] = [
  {
    name: "Home",
    description: "Home page",
    href: "/",
  },
  {
    name: "Skills",
    description:
      "Learn more about what I have to offer with my skills and experience",
    href: "/skills",
  },
  {
    name: "Blog",
    description: "Join the fun and read up on what's new in my life",
    href: "/blog",
  },
];

type Status = "authenticated" | "loading" | "unauthenticated";

type AuthNames = "Sign In" | "Sign Out" | "Sign Up";

export type AuthActions = {
  name: AuthNames;
  href: string;
  onClick?: () => void;
};

/**
 * Helper function that returns an array of authentication links based on whether the user is logged in
 * @param status Users logged in status
 * @returns array of auth navigation links
 */
export const getAuthLinks = (status: Status) => {
  let array: AuthActions[] = [
    {
      name: "Sign Up",
      href: "/auth/signup",
    },
  ];
  if (status === "authenticated") {
    array.unshift({
      name: "Sign Out",
      href: "/auth/signout",
      onClick: signOut,
    });
  } else {
    array.unshift({
      name: "Sign In",
      href: "/auth/signin",
    });
  }

  return array;
};
