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
  {
    name: "Sign In",
    description: "Share your thoughts with an account of your own",
    href: "/auth/signin",
  },
  {
    name: "Sign Out",
    description: "Even your cookies need a break from the buffet",
    href: "/auth/signout",
  },
  {
    name: "Sign Up",
    description: "",
    href: "/auth/signup",
  },
];

export const callsToAction = [
  { name: "Contact Me", href: "#" },
  { name: "View LinkedIn", href: "#" },
];
